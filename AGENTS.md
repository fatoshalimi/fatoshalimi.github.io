# AGENTS.md

These instructions apply to the entire repository.

## Setup
- When cloning, fetch submodules:
  `git clone --recurse-submodules` or after cloning `git submodule update --init --recursive`.
- Requires Node.js (v22) and the extended Hugo version.
- Install dependencies with `npm ci`.

## Development and checks
- Local development: `npm run start`.
- Before every commit:
  1. Run `npm run build`
  2. Run `npm audit --audit-level=high`
  The build must finish without errors or warnings.

## Content
- Blog posts reside under `content/de/blog` and `content/en/blog`.
- Use YAML front matter delimited by `---` with fields such as `author`, `title`, `date`, `description`, `tags`, `thumbnail`.
- New content should—when possible—be created in both German and English.
- Add new text strings to `i18n/de.yaml` and `i18n/en.yaml`.
- Place images in `static/images/`; ideally provide `.jpg/.png` and `.webp` versions.

## Assets & styling
- Adjust CSS/JS in `assets/` (TailwindCSS).
- After changes run `npm run build` to regenerate resources.
- Theme directories in `themes/` are Git submodules—modify only when needed and commit separately.

## Configuration
- Central settings live in `config.toml` (default language: German, `metaDataFormat = "yaml"`).
- Do not commit generated files (`public/`).

## Git conventions
- Use English commit messages in the imperative (e.g., `fix: correct intro photo path`).
- Each commit must leave a clean working tree.

