# Type specification — Hanindhiya Daffa Aurelya

**Reader:** hiring staff reviewing qualifications, roles, and responsibilities. **Source:** 1-page CV dated from the 2026 latest entry; all visible website facts verified from this CV. **Languages:** English and Indonesian names/organizations.

## Typographic thesis
A restrained register of verifiable work uses a **condensed nameplate and readable administrative rows** to make the person recognizable while keeping full employer names, duties and dates easy to compare.

## Three typography-only studies (same genuine copy)
Each specimen uses exact text from the CV: `Hanindhiya Daffa Aurelya`, `Legal Administration Support Intern`, `South Jakarta Religious Court`, `February 2024`, `Assisted with the administrative process for receiving lawsuits, including verifying the completeness of data and submission documents.`, `GPA 3.79/4.00`, and `Explore experience` (the last is interface copy, not CV claim). Grayscale specimens are in `design/type-specimens.html`.

| Study | Reading order / style | Tradeoff |
|---|---|---|
| A: restrained | Full name first in regular sans; continuous flat date/organization row; paragraph underneath | Extremely legible, but not a strong personality moment |
| B: voice-led | Large condensed nameplate, distinct factual row, short authentic prose | **Selected**: clear first-scan personal identity plus verifiable responsibilities; risks long-name wrap if not tested |
| C: task-density | Compact column with dates and employers preceding identity | Useful for spreadsheet-like comparison, yet buries person on initial visit |

All three must be assessed in gray, without portraits or color. Chosen B; actual web implementation transforms this grammar into a responsive record. The self-contained specimen page uses local/system fonts to avoid dependency for the test.

## Fonts and rights
- **Display:** `Barlow Condensed`, Google Fonts; SIL Open Font License 1.1. We load via official Google Fonts CSS; do not bundle proprietary font files. Its condensed letters accommodate a long name without manual forced splitting of words.
- **Body, labels, navigation:** `IBM Plex Sans`, Google Fonts; SIL Open Font License 1.1. Clear numerals and readable mixed institutional names; regular 400, medium 500, semibold 600.
- Fallback: `'Liberation Sans Narrow', 'Nimbus Sans Narrow', Impact, sans-serif` for headings, and `Arial, Helvetica, sans-serif` for body. If webfont loading fails, nothing becomes invisible or blocked.
- Do not confuse external network font success with site functionality. No Google font file redistributed.

## Semantic roles

| Role | Actual text | Style / initial measure |
|---|---|---|
| Main title | Hanindhiya Daffa Aurelya | Barlow Condensed 600, `clamp(4rem, 9vw, 10.5rem)`, 0.9–0.96 leading; adaptive wrap, no ellipsis |
| Chapter heading | A record of experience | Barlow Condensed 500, `clamp(2.7rem, 5.9vw, 5.5rem)` |
| Main summary | A law graduate ... | IBM Plex Sans 400, 18–22 px / 1.55; max ~55ch |
| Experience title | Legal Administration Support Intern | IBM Plex Sans 600, 20–26 px / 1.2; never truncate |
| Experience description | Assisted with... | IBM Plex Sans 400, 16–18 px / 1.6; <= 67ch when possible |
| Date / details | February 2024 | IBM Plex Sans 500, 13–15 px / 1.5; numeric styling where aligned |
| CTA / nav | Explore experience, Contact | IBM Plex Sans 500, >=14px / 1.4; focus ring and 44px interactive target |
| Numeric degree fact | 3.79/4.00 | Barlow Condensed 500, separate hierarchy and unit label |

## Reflow and reduction
- Name breaks at natural word boundaries in HTML using three spans for deliberate editorial lines, but each actual word remains unbroken and never hidden.
- The longest organization, `PT Ramayana Lestari Sentosa Tbk — Ciplaz Depok Branch`, wraps unrestricted in its own row at 320px.
- At <=720px the timeline grid becomes a stacked flow; nav contracts to functional short names with no closed mobile drawer.
- At 200% browser zoom, the columns stack at their effective CSS viewport. No fixed heights on text-bearing regions.
- `prefers-reduced-motion` disables smooth scrolling, progress animation, and transform transitions.
- Avoid all-caps tiny labels carrying essential meaning; section context appears in ordinary sentence case.

## QA
Recorded in `REVIEW_REPORT.md` once browser inspection has been completed. External participant reading tests: NOT TESTED.