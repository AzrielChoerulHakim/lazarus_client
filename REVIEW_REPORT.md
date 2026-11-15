# Lazarus Design OS — QA and originality report

**Project:** Hanindhiya Daffa Aurelya / The Personal Register  
**Date:** 15 November 2026  
**Source material:** client CV, four client photos  
**Implementation:** static HTML/CSS/vanilla JS  
**Tested source snapshot:** staged local build tested before publication; Git commit SHA recorded in the handoff after the atomic push.  
**Review environment:** Linux, Chromium 144.0.7559.96 (headless), Playwright; final screenshots stored in separate handoff QA ZIP. The browser's external network was unavailable, thus image/font fallback behavior is visible in local screenshots.

## Observed tests

| Test | Observation | Status |
|---|---|---|
| 320×720 | Full page rendered; no horizontal overflow; natural work rows and contact title | PASS (observed) |
| 390×844 | Full page rendered; no horizontal overflow | PASS (observed) |
| 640×900 | Full page rendered; mobile nav functional; no horizontal overflow | PASS (observed) |
| 768×1024 | Full page rendered; no horizontal overflow | PASS (observed) |
| 1024×768 | Full page rendered; no horizontal overflow | PASS (observed) |
| 1440×900 | Full page rendered; no horizontal overflow | PASS (observed) |
| 832×384 short viewport | No horizontal overflow; natural vertical scrolling | PASS (observed) |
| Responsive filter controls | Service: 3 records; legal administration: 1; all: 4; `aria-pressed` updates | PASS (observed) |
| Mobile navigation | Opens; Escape closes; nav anchor closes; all buttons are actual controls | PASS (observed) |
| Portrait assets | Both images loaded from submitted photo source in local tests | PASS (observed) |
| JavaScript | No page exceptions in seven viewport tests | PASS (observed) |
| Reduced motion | `prefers-reduced-motion: reduce` matched and `scroll-behavior:auto` | PASS (observed) |
| Effective viewport at 200% of 1280px | Reflow checked at 640 CSS px, no sideways overflow | PASS (viewport proxy, not native browser zoom) |
| Effective viewport at 400% of 1280px | Reflow checked at 320 CSS px, no sideways overflow | PASS (viewport proxy, not native browser zoom) |
| WCAG text spacing override | Applied 1.5 leading, 0.12em letter, 0.16em word, 2em paragraph margin at 320px. Decorative overflow prevented; no text element extended beyond viewport in element bounds review | PASS (observed) |
| Font network failed | Local browser rendered system fallbacks; all names, paragraphs, and controls stayed usable after fallback sizing fixes | PASS (observed) |
| Focus affordances / semantics | Semantic headings, details/summary, nav, native buttons; visible 3px focus CSS | Code reviewed; automated tab traversal NOT TESTED |
| Email and LinkedIn | Real `mailto` and CV-listed LinkedIn URL, no placeholder CTA | Source/code verified; external open NOT TESTED |
| Normal-text contrast | Intended ink/muted palettes exceed common AA thresholds; not every image background/state independently measured | PARTIAL; precise per-pixel image contrast NOT TESTED |
| Deployment | GitHub repository upload and Pages URL to be checked after commit | Pending publication verification |
| iOS Safari / Android Chrome on device | Not available | NOT TESTED |
| Independent originality / optical type review | Requires blinded human participants | NOT TESTED |

## Anti-generic review (qualitative)
- **Identity:** strong — court support duties, four actual employers and verified education still distinguish person without portrait/name.
- **Architecture:** strong — annotated personal folio → professional perspective → expandable experience register → credentials ledger → skills → correspondence. Not fabricated project cards.
- **Typography:** evaluated — Barlow Condensed/IBM Plex Sans with tested narrow fallbacks; three grayscale same-copy studies in `design/type-specimens.html`.
- **Assets:** grounded — two optimized original user-supplied photographs; rights for broader commercial publication should be confirmed.
- **Interaction:** purposeful — record filtering, reversible disclosure, reading-position indicator; no scroll-jacking.
- **Cohesion:** visual system built around professional record, editorial index rules and original portrait placement; requires subjective feedback.
- **Usability:** responsive viewport tests passed; external network device testing remains outstanding.

## Revisions made during QA
1. First draft overflowed at 320px and 390px: long name and closing headline. Corrected responsive type sizes and condensed fallback stack.
2. Education card and training heading exceeded the 320px width under increased letter spacing. Corrected 320px typography and allowed vertical flow.
3. Graduation portrait's top caption had insufficient background consistency; inserted a dark overlay so the caption remains legible.
4. Browser testing used in-memory HTML with embedded *exact local* CSS/JS/WebP because container browsing forbids local file/localhost navigation. This checks rendering and interaction; published-server delivery is a separate verification step.

## Open limitations
Google Fonts could not load in the local browser. The test used installed fallback fonts, while remote font load performance and optical appearance must be rechecked on a reachable published URL. Color contrast in real photo pixels, iOS Safari, independent human originality assessment, native browser zoom and assistive-technology screen reader behavior are not fully verified; do not claim WCAG certification.