# Brand image usage

User selections recorded on 2026-10-26. Files were renamed without changing their image content.

| File | Intended usage | Image properties | Original filename |
| --- | --- | --- | --- |
| `favicon.png` | Selected favicon source | 1254 × 1254, transparent canvas around a dark rounded tile with a light monogram and coral accent | Abstract Teal S Monogram Icon.png |
| `navbar-logo.png` | Selected navbar logo source | 1983 × 793, transparent horizontal lockup; dark monogram, name and role descriptor | Minimal Shirish Shrestha Logo Lockup-Photoroom.png |
| `logo-mark.png` | Standalone brand symbol for light surfaces | 1254 × 1254, transparent dark monogram with coral accent | Geometric Forest Green Hexagon Logo.png |
| `app-icon-preview.png` | Icon presentation/reference | 1254 × 1254, opaque paper background with a dark rounded icon tile | Interlocking Ribbon Logo Icon.png |
| `logo-lockup-preview.png` | Full logo presentation/reference on paper | 1983 × 793, opaque paper background | Minimal Shirish Shrestha Logo Lockup.png |

## Integration notes

- Public asset URLs start with `/images/brand/`.
- `favicon.png` is the preserved master source. `scripts/prepare-brand-assets.mjs` trims the empty margin and generates `app/favicon.ico` (16/32/48px), `app/icon.png` (192px) and `app/apple-icon.png` (180px), discovered automatically by Next.js.
- `navbar-logo.png` is the preserved master. The navbar uses its trimmed 1000 × 210 derivative, `navbar-logo-web.png`, through Next Image with reserved dimensions.
- Dark mode applies a white silhouette filter to the navbar logo, including its accent. The light theme retains the source colors. `logo-mark.png` targets light backgrounds.
- The two `*-preview.png` images contain a baked-in paper surface and are presentation assets, not transparent UI logos.
- Run `node scripts/prepare-brand-assets.mjs` after replacing either selected master to regenerate the web assets. The script uses Sharp supplied by the installed Next.js dependency tree.
