#!/usr/bin/env node
/**
 * Durable Admin API access for Noble Meridian.
 *
 * Required environment secrets (set in Cursor Environment Secrets, not chat):
 *   SHOPIFY_SHOP_DOMAIN   e.g. noblemeridian.myshopify.com
 *   SHOPIFY_CLIENT_ID     Dev Dashboard app client id
 *   SHOPIFY_CLIENT_SECRET Dev Dashboard app client secret
 *
 * Optional (legacy offline token, if you already have one):
 *   SHOPIFY_ADMIN_TOKEN   shpat_...
 *
 * Usage:
 *   node scripts/noble-shopify.mjs shop
 *   node scripts/noble-shopify.mjs gql '{ shop { name myshopifyDomain } }'
 */

const shopDomain = (process.env.SHOPIFY_SHOP_DOMAIN || "")
  .replace(/^https?:\/\//, "")
  .replace(/\/$/, "");
const clientId = process.env.SHOPIFY_CLIENT_ID || "";
const clientSecret = process.env.SHOPIFY_CLIENT_SECRET || "";
const staticToken = process.env.SHOPIFY_ADMIN_TOKEN || "";

function fail(msg) {
  console.error(msg);
  process.exit(1);
}

async function getToken() {
  if (staticToken) return staticToken;
  if (!shopDomain || !clientId || !clientSecret) {
    fail(
      [
        "Missing Noble Meridian credentials.",
        "Add these Cursor Environment Secrets:",
        "  SHOPIFY_SHOP_DOMAIN",
        "  SHOPIFY_CLIENT_ID",
        "  SHOPIFY_CLIENT_SECRET",
        "Or set SHOPIFY_ADMIN_TOKEN for a legacy offline token.",
      ].join("\n")
    );
  }

  const body = new URLSearchParams({
    grant_type: "client_credentials",
    client_id: clientId,
    client_secret: clientSecret,
  });

  const res = await fetch(`https://${shopDomain}/admin/oauth/access_token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });
  const json = await res.json();
  if (!res.ok || !json.access_token) {
    fail(`Token request failed: ${JSON.stringify(json)}`);
  }
  return json.access_token;
}

async function adminGraphql(query, variables = {}) {
  const token = await getToken();
  const res = await fetch(
    `https://${shopDomain}/admin/api/2025-10/graphql.json`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": token,
      },
      body: JSON.stringify({ query, variables }),
    }
  );
  const json = await res.json();
  if (!res.ok || json.errors) {
    fail(JSON.stringify(json, null, 2));
  }
  return json.data;
}

async function main() {
  const [cmd, ...rest] = process.argv.slice(2);
  if (!cmd || cmd === "help") {
    console.log("Usage: node scripts/noble-shopify.mjs shop | gql '<query>'");
    process.exit(0);
  }

  if (cmd === "shop") {
    const data = await adminGraphql(`{
      shop {
        name
        myshopifyDomain
        primaryDomain { host }
        currencyCode
        plan { displayName }
      }
    }`);
    console.log(JSON.stringify(data.shop, null, 2));
    return;
  }

  if (cmd === "gql") {
    const query = rest.join(" ").trim();
    if (!query) fail("Pass a GraphQL query string.");
    const data = await adminGraphql(query);
    console.log(JSON.stringify(data, null, 2));
    return;
  }

  fail(`Unknown command: ${cmd}`);
}

main().catch((err) => fail(String(err?.stack || err)));
