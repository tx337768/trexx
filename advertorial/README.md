# Standby House — Product page + Ad LPs

Promotional pages for [standbyhouse.com](https://standbyhouse.com/). Protection objects only (lantern, radio, power bank, emergency bag) — not food.

## Pages

| URL | Lang | Purpose |
| --- | --- | --- |
| [`ads.html`](./ads.html) | EN | Media buyer hub — which LP for which angle |
| [`lp-blackout.html`](./lp-blackout.html) | EN | Meta LP — lights die / 3 minutes |
| [`lp-apagao.html`](./lp-apagao.html) | PT | Meta LP — same angle for PT/ES |
| [`lp-free-bag.html`](./lp-free-bag.html) | EN | Meta LP — FREE emergency bag offer |
| [`lp-72h.html`](./lp-72h.html) | EN | Meta LP — 72h / not a prepper |
| [`index.html`](./index.html) | EN | Dense PDP (warm / retargeting) |
| [`advertorial-pt.html`](./advertorial-pt.html) | PT | Story advertorial |
| [`home-blackout-kit.html`](./home-blackout-kit.html) | EN | Redirect → index (keeps query/hash) |

Fonts are self-hosted in `fonts/` (no Google runtime requests).

## Ad routing (week 1)

1. Cold Meta → dedicated LP (`lp-*`), never homepage.
2. PT/ES spend → `lp-apagao.html`.
3. Worldwide creative tests → split `lp-blackout` / `lp-free-bag` / `lp-72h`.
4. Kill creatives in 3–5 days if they don’t hold; scale only winners.
5. Full site redesign later — after a winning angle + LP.

Shopify CTAs include `utm_source=meta&utm_medium=paid&utm_campaign=lp_*`.

## Run locally

```bash
cd advertorial
python3 -m http.server 8765 --bind 127.0.0.1
```

Open `http://127.0.0.1:8765/ads.html`
