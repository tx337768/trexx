# Where customers abandon — how to see it

## What the data already shows (last 30 days, landing on `/collections/final-sale`)
- ~35k sessions → ~232 add-to-cart (~0.7%) → ~98 checkout → ~15 orders
- Bounce ~67%, avg session ~45s
- **Main leak = collection page → add to cart**, not checkout
- Likely drivers we fixed: weak urgency, Lisbon hardcode, many variants `DENY` at qty 0 (sold-out / blocked ATC)

## Live now on final-sale
Page: sticky Black Friday bar, countdown to 30 Nov, visitor city + local deadline, free shipping / 60-day trust, **Choose size** CTAs.

Custom GA4 / Shopify analytics events (prefix `nm_fs_`) — emitted only on `final-sale` via a Liquid-gated `<script>` (not in shared collection JS):

| Event | Meaning |
|---|---|
| `nm_fs_view` | Landed on final-sale |
| `nm_fs_scroll` | Scroll depth 25/50/75/90% |
| `nm_fs_click` | Clicked product image/title/Choose size |
| `nm_fs_time` | Still on page at 15/30/60s |
| `nm_fs_exit` | Tab hidden / leave |

### 1) Shopify Admin (funnel numbers)
1. **Analytics → Reports → Sessions by landing page** → filter `final-sale`
2. **Analytics → Reports → Online store conversion over time**
3. **Analytics → Reports → Products by conversion rate** (which SKUs get clicks but no ATC)
4. **Analytics → Checkout** for drop-off *after* ATC

### 2) GA4 (micro-abandonment on the collection itself)
Property already on store: `G-9QWWMJRVKX`

1. [GA4](https://analytics.google.com) → **Admin → DebugView** (or **Reports → Engagement → Events**)
2. Filter events starting with `nm_fs_`
3. Build an **Exploration** free-form funnel:
   `nm_fs_view` → `nm_fs_scroll` (50%) → `nm_fs_click` → `add_to_cart` → `begin_checkout` → `purchase`

Interpretation shortcuts:
- High `nm_fs_view`, low `nm_fs_scroll` → bounce above the fold (hero/price/trust)
- Scroll OK, low `nm_fs_click` → product grid/price not compelling
- Click OK, low `add_to_cart` → PDP/size/stock friction
- ATC OK, low `purchase` → checkout (shipping, payment, trust)

### 3) Session recordings (see WHY they leave)
Install **Microsoft Clarity** (free) — recordings, rage clicks, dead clicks:

1. Create project at https://clarity.microsoft.com (~1 min)
2. Shopify Admin → **Settings → Customer events → Add custom pixel**
3. Paste (replace `YOUR_CLARITY_ID`):

```javascript
analytics.subscribe('all_standard_events', (event) => {
  // keep pixel active under Shopify consent
});
(function(c,l,a,r,i,t,y){
  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "YOUR_CLARITY_ID");
```

4. Connect pixel → save → enable
5. **Clarity → Recordings** → URL contains `final-sale`

Send the Clarity project ID and we inject it into the storefront for you.
