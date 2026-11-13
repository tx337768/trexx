# Where customers abandon — how to see it

## What the data already shows (last 30 days, landing on `/collections/final-sale`)
- ~35k sessions → ~232 add-to-cart (~0.7%) → ~98 checkout → ~15 orders
- Bounce ~67%, avg session ~45s
- **Main leak = collection page → add to cart**, not checkout

## Live now on final-sale
Custom GA4 / Shopify analytics events (prefix `nm_fs_`):
| Event | Meaning |
|---|---|
| `nm_fs_view` | Landed on final-sale |
| `nm_fs_scroll` | Scroll depth 25/50/75/90% |
| `nm_fs_click` | Clicked product image/title/Choose size |
| `nm_fs_time` | Still on page at 15/30/60s |
| `nm_fs_exit` | Tab hidden / leave |

### GA4 (already on store: `G-9QWWMJRVKX`)
1. Open [GA4](https://analytics.google.com) → Admin → DebugView (or Reports → Engagement → Events)
2. Filter events starting with `nm_fs_`
3. Build an Exploration: free-form funnel `nm_fs_view` → `nm_fs_scroll` → `nm_fs_click` → `add_to_cart` → `begin_checkout` → `purchase`

### Shopify Admin funnel
1. **Analytics → Reports → Sessions by landing page** (filter `final-sale`)
2. **Analytics → Reports → Conversion** / online store conversion
3. **Analytics → Checkout** for checkout drop-off *after* ATC

## Session recordings + heatmaps (see WHY they leave)
Install **Microsoft Clarity** (free) — recordings, rage clicks, dead clicks:

1. Create project at https://clarity.microsoft.com (1 min)
2. Shopify Admin → **Settings → Customer events → Add custom pixel**
3. Paste this (replace `YOUR_CLARITY_ID`):

```javascript
analytics.subscribe('all_standard_events', (event) => {
  // no-op bridge so pixel stays active with Shopify consent
});
(function(c,l,a,r,i,t,y){
  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "YOUR_CLARITY_ID");
```

4. Connect the pixel → save → enable
5. Watch **Clarity → Recordings** filtered by URL contains `final-sale`

Send the Clarity project ID and we can inject it into the storefront code for you.
