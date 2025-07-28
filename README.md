# Fatos Halimi Website

## Deutsch

Dieses Repository enthält den Quellcode der persönlichen Website von Fatos Halimi. Die Seite wird mit [Hugo](https://gohugo.io/) generiert und nutzt die Themes **Blist** und **hugo-cloak-email** als Git-Submodule.

### Inhalt & Struktur

- **content/** – Blogbeiträge und Seiten in Deutsch (`de`) und Englisch (`en`)
- **layouts/** – HTML-Templates der Themes
- **assets/** – TailwindCSS und JavaScript, die beim Build verarbeitet werden
- **static/** – Dateien, die unverändert in den finalen Build kopiert werden

Die zentrale Konfiguration befindet sich in `config.toml`. Die Standardsprache ist Deutsch.

### Lokale Entwicklung

1. Node.js installieren und die Abhängigkeiten holen:
   ```bash
   npm install
   ```
2. Die Submodule initialisieren (falls noch nicht geschehen):
   ```bash
   git submodule update --init --recursive
   ```
3. Entwicklungsserver starten:
   ```bash
   npm run start
   ```
   Hugo startet unter `http://localhost:1313` und aktualisiert die Seite bei Änderungen automatisch.

### Produktion

Für einen produktiven Build wird das CSS minimiert und der `public/`-Ordner erstellt:

```bash
npm run build
```

Der Deploy erfolgt über GitHub Pages mittels des Workflows in `.github/workflows/hugo.yml`.

### Lizenz

Die verwendeten Themes unterliegen der MIT-Lizenz (siehe jeweilige Repositories). Für den übrigen Inhalt gelten die Rechte von Fatos Halimi.

---

## English

This repository contains the source code of Fatos Halimi's personal website. The site is generated with [Hugo](https://gohugo.io/) and uses the themes **Blist** and **hugo-cloak-email** as Git submodules.

### Content & Structure

- **content/** – Blog posts and pages in German (`de`) and English (`en`)
- **layouts/** – HTML templates provided by the themes
- **assets/** – TailwindCSS and JavaScript processed during the build
- **static/** – Files that are copied unchanged into the final build

The main configuration resides in `config.toml`. The default language is German.

### Local Development

1. Install Node.js and fetch the dependencies:
   ```bash
   npm install
   ```
2. Initialize the submodules (if not already done):
   ```bash
   git submodule update --init --recursive
   ```
3. Start the development server:
   ```bash
   npm run start
   ```
   Hugo will be available at `http://localhost:1313` and reloads the page when files change.

### Production

For a production build the CSS is minified and the `public/` folder is generated:

```bash
npm run build
```

Deployment happens via GitHub Pages using the workflow in `.github/workflows/hugo.yml`.

### License

The themes used are released under the MIT License (see their respective repositories). All other content is owned by Fatos Halimi.
