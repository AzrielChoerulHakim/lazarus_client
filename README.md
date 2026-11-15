# Hanindhiya Daffa Aurelya — The Personal Register

An original static professional portfolio prepared by Lazarus Dev from the client's one-page CV and submitted photographs. This project follows the [Lazarus Design OS](https://github.com/AzrielChoerulHakim/lazarus-design-os), version inspected on 15 November 2026.

## Preview / run
Open `index.html` locally or serve the folder (`python -m http.server 8000`). No framework, build step, or API keys. All content, styles and behavior are static HTML/CSS/vanilla JS. The custom fonts are requested from Google Fonts; system fallbacks preserve functionality offline.

## Information boundaries
The source CV was used to verify the name, education, employment, trainings, language-assessment score and skills. Portrait images were taken only from the provided `Aurel.zip`; export converts them to optimized WebP and strips original metadata. We **do not** publish the original CV/ZIP, phone number, invented projects or fabricated legal credentials. Portrait usage rights outside the client's requested portfolio should be confirmed by the client before commercial reuse.

## Repository contents
- `index.html`, `styles.css`, `app.js`: complete site.
- `assets/`: two optimized authentic photographs and an original SVG monogram.
- `design/type-specimens.html`, `TYPE_SPEC.md`: comparative typography tests.
- `DESIGN_DECISIONS.md`, `REVIEW_REPORT.md`: seven concept directions, choices, and QA evidence.
- `.github/workflows/pages.yml`: GitHub Pages deploy workflow.
- `vercel.json`: static Vercel configuration.

## GitHub Pages
For a new repository, enable **Settings → Pages → Build and deployment → Source: GitHub Actions**. The workflow deploys on push to `main` or manual dispatch. Expected base-path-safe URL in this working repository: `https://azrielchoerulhakim.github.io/lazarus_client/`. The URL should be considered live **only after a successful deployment and HTTP verification**.

## Clean handoff to client's GitHub (no shared history)
1. Download the final clean build ZIP from Lazarus (or copy the current source files, excluding `.git/` and all local `qa/` screenshots).
2. On the client's **new blank repository**, upload these files at the repository root as its **first commit**. Do not fork, mirror or import the working repository's Git history if strict isolation is required.
3. Test Pages if desired, then in Vercel select **Add New → Project → Import Git Repository**, choose the client-owned repository. Framework preset: **Other**; no build command; output directory `.` (project root).
4. Confirm public information and portrait publication permission with the client. After deployment, verify URL, images, mobile navigation, filters, and email/LinkedIn links.

## Why this is not a fake case-study portfolio
The CV contains employment responsibilities but no independent project artifacts. The experience register shows exactly those verifiable responsibilities, without presenting court work as retained legal cases or invented achievements.