# Noble Meridian — Meta ad landing pages

Source of truth for two draft GemPages LPs (light NM system: paper `#f6f3ed`, ink `#111`, Georgia / Arial).

| Angle | Local | GemPages handle | Pattern |
|---|---|---|---|
| Craft Value | `craft-value/` | `ad-craft-value` | Thursday Boots — highest quality, honest prices |
| Comfort Loafer | `comfort-loafer/` | `ad-comfort-loafer` | Amberjack — dress look, all-day ease |

## Preview locally

```bash
cd lps && python3 -m http.server 8765 --bind 127.0.0.1
# http://127.0.0.1:8765/craft-value/standalone.html
# http://127.0.0.1:8765/comfort-loafer/standalone.html
```

## Stock gate

Do **not** scale Meta spend until Admin inventory is corrected (OOS / negative qty + unfulfilled orders). Storefront `available=true` can still oversell.
