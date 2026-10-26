# Shirish Shrestha / identity exploration

Created in Penpot through its MCP on 2026-10-26. Status: concepts for owner review; the portfolio's live logo has not been replaced.

## Subsequent owner asset selections

The owner selected the supplied `public/images/brand/favicon.png` as the favicon source and `public/images/brand/navbar-logo.png` as the navbar logo source. These use the supplied hexagonal monogram, rather than the exploratory Folded SS recommendation below. The selections take precedence for implementation. Both are now integrated: a trimmed navbar derivative, a monochrome white dark-mode treatment, and generated browser/Apple icons. See [brand asset usage](../public/images/brand/README.md) for the complete filename mapping and regeneration notes.

## Penpot location

- Connected file: `New File 1`
- File ID: `5e77f908-ef97-81d0-8008-d828dcf4d311`
- New page: `Shirish / Brand Kit / 2026`
- Page ID: `32bfd507-6db1-80b2-8008-d8f6ce8a4c84`
- Existing portfolio draft page preserved.

## Reference analysis

The supplied **Shirish Shrestha Brand Identity Board** offers two different directions. Its angular SS monogram connects the identity to the owner's initials and has a strong silhouette. Its engineering symbol communicates structure, but brackets and upward chevrons are common within software branding, so it is less personal. The stacked wordmark and restrained coral detail provide useful hierarchy. The divider line, widely tracked descriptor, and textured surfaces should not be required parts of a small logo.

The supplied **Minimal Infinity Monogram Brand Identity** has a more approachable, curved SS reading. It suggests continuity, although the diagonal crossing can also read as a swoosh. Its thin coral segment and narrow negative space would be fragile at favicon sizes. The identity should remain recognizable without either texture or accent color.

Both references support a restrained green, paper and coral palette, generous spacing, geometric letterforms, and consistent mark/wordmark relationships. The Penpot explorations use newly constructed vector paths rather than placing the supplied raster images as logos.

## Research and design decisions

Official references consulted:

- [IBM logo guidance](https://www.ibm.com/design/language/ibm-logos/8-bar/) for the principle of protected clear space and relationships between marks and logotypes.
- [Mozilla logo sizes](https://protocol.mozilla.org/components/detail/logo--sizes) for examining logo use across distinct display sizes.

The numerical rules below are proposed rules for this identity, not values copied from those brands. No trademark availability or uniqueness search has been completed.

1. **Folded SS — recommended concept.** Two repeated angular initials, open counters and a coral lower terminal. Compact construction supports a one-color silhouette.
2. **Paired SS — softer alternative.** Filled curved paths retain their proportions when resized. The coral segment follows a terminal rather than adding a separate crossing ribbon.
3. **Assembly — technical alternative.** Brackets and a central joint suggest software structure. Less distinctive as a personal identity than the initials.

Use one selected direction consistently. These alternatives are not separate sub-brands.

## Kit contents

1. Identity directions, with small-size comparisons.
2. Primary horizontal logo system: light, dark, monochrome and icon treatments.
3. Alternate horizontal systems.
4. Theme palettes and typography.
5. Construction, clear space and usage rules.
6. Header, avatar, contact card, favicon and social applications.
7. Nine reusable vector components: three directions × Light, Dark and Mono.
8. Stacked light and dark signatures.

Reusable components are organized under `Shirish / Folded SS`, `Shirish / Paired SS`, and `Shirish / Assembly`. Palette colors are saved in the file's local library. Component boards include SVG and 2× PNG export settings; their backing surfaces are presentation tiles. Export the contained mark alone when a transparent logo is needed.

## Palette authority

`app/globals.css` remains the source of truth.

| Token | Light | Dark |
| --- | --- | --- |
| paper | #F3F5F1 | #10211F |
| ink | #10211F | #F0F3ED |
| deep | #163633 | #071311 |
| accent | #D85B3F | #F37859 |
| muted | #60706C | #AEBBB4 |
| line | #C9D1CB | #42605A |

Use Ink for reading text on Paper. Coral is a small logo accent; do not rely on it for normal-sized body text on Paper. The monochrome version converts the accent to the same ink as the rest of the symbol.

## Typography and proposed usage

- Production wordmark: Gilroy Bold; body/utility: Gilroy Medium; portfolio display headings: Gilroy Extrabold.
- Gilroy was not available in the connected Penpot font library. Editable text currently uses DM Sans as an explicitly labeled substitute. Upload the licensed Gilroy family and review spacing before approving a final wordmark.
- Proposed clear space: at least one-quarter of the mark height on every side.
- Proposed full-mark minimum: 24px wide; verify exported raster output at its actual display size.
- At 16px, use the simplified single-S favicon treatment. Do not squeeze the role descriptor into compact placements.
- Scale proportionally; preserve flat fills and the designed angles. Do not stretch, add outlines or shadows, or change terminal colors independently of the palette.
- Small-size vector specimens are included; final 16px raster and print reproduction remain to be checked.

## Verification

Exported and visually inspected the concept overview, primary system, application board and stacked signatures. Found a stroke-scaling problem in the curved concept's initial version and replaced it with filled paths. A subsequent containment check passed for all eight boards.

Next decision: select a direction, then finish Gilroy spacing and production exports before integrating the chosen logo into the portfolio.
