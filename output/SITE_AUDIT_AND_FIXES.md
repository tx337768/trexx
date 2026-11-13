# Noble Meridian — Site audit & fixes (13 Nov 2026)

## Verdict
Homepage is **discount-first** (“Up to 60% off” / Black Friday) with **no live free-shipping bar**. Policy already promises free standard shipping + 60-day money-back — competitors shout this; NM hides it. Admin inventory is **0 / negative** while storefront still sells (`availableForSale: true`) — overselling risk before Meta scale.

## What we fixed already
| Fix | Status |
|---|---|
| Renamed 12 Online Store pages from “Velmont — …” → Noble Meridian titles | **Live** (Shopify Admin) |
| Rebuilt Craft Value + Comfort Loafer LPs (value narrative, specs, $ prices, free ship/60-day) | **Code** `/lps` |
| New Weston PDP-style ad LP (Amberjack pattern: 1 product destination) | **Code** `/lps/weston-pdp` |
| Homepage copy patches prepared (announcement evergreen + hero value copy, EN/DE/ES/FR) | **Ready** in `/output/homepage_patches` — awaiting live vs duplicate choice |

## Homepage issues (still live until you choose write target)
1. Announcement bar **expired 31 Oct 2026** → currently hidden → zero “free shipping” on first viewport
2. H1: “Your next pair. Up to 60% off.” (trains deal-seeking)
3. CTA: “SHOP BLACK FRIDAY”
4. Trust row says “Clear return information” instead of free ship / 60-day
5. GemPages page still named “Velmont — Clean Atelier” / section “Velmont — Hero”
6. Cart/checkout chrome: “Shipping and taxes calculated at checkout” undercuts free-ship policy

**Prepared patch:** evergreen `FREE SHIPPING & RETURNS · 60-DAY MONEY-BACK` + hero → “Highest quality. Honest prices.” + CTAs → “SHOP THE COLLECTION” (all locales in CSSCode blocks).

## Inventory / fulfillment (blocker for paid scale)
- Admin: hero SKUs at **0 or negative** qty with continue-selling on
- Storefront JSON: shows available (oversell UX)
- **Do not scale Meta** until real sellable stock is restored or continue-selling is turned off on OOS sizes

## Ad destinations (data-led)
| Destination | File / handle | Job |
|---|---|---|
| Craft Value LP | `ad-craft-value` + `/lps/craft-value` | Cold traffic · Thursday angle |
| Comfort Loafer LP | `ad-comfort-loafer` + `/lps/comfort-loafer` | Comfort angle |
| Weston PDP LP | `/lps/weston-pdp` (to sync as draft) | Amberjack direct-PDP pattern |
| Live PDP fallback | `/products/weston-loafers-mens` / `-suede-mens` | Retarget + proven direct |

## Policy truth (use in ads + site)
- Free standard shipping (destinations at checkout) — Shipping Policy
- 60-day money-back — Returns policy
