# Standby House — Product page + Advertorial

Promotional pages for [standbyhouse.com](https://standbyhouse.com/).

## Pages

| URL | Language | Purpose |
| --- | --- | --- |
| [`index.html`](./index.html) | EN | High-urgency Home Blackout Kit product page (free bag) |
| [`advertorial-pt.html`](./advertorial-pt.html) | PT | Story advertorial |
| [`home-blackout-kit.html`](./home-blackout-kit.html) | EN | Redirect → index |

Fonts are self-hosted in `fonts/` (no Google runtime requests).

## Run locally

```bash
cd advertorial
python3 -m http.server 8765 --bind 127.0.0.1
```

Open `http://127.0.0.1:8765/`
