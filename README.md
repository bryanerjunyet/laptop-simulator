# Laptop Simulator

An interactive laptop mockup simulator for immersive story exploration. The site presents a MacBook-style login screen where visitors choose a persona account, enter that persona's laptop, and explore mocked desktop applications for clues, documents, messages, media, and browser pages.

Hosted site: https://laptop-simulator.vercel.app/

## Current Personas

### 追光

A persona laptop centered around a performer-focused laptop. This account contains a digital-life storyline built through apps such as Instagram, Gmail, WhatsApp, Bank, and Notes.

### 单鸿

A persona laptop centered around email evidence and communication. The main experience is a Gmail-style inbox with story-relevant Chinese email content, plus supporting desktop apps such as Chrome, Calendar, Finder, Gallery, and Notes.

### 阿禾

A persona laptop focused on media discussion, saved public comments, image evidence, and artwork file details. The desktop includes Chrome, Photoshop, Calendar, Finder, Gallery, Notes, and Gmail.

## Main Features

- MacBook-inspired account login page with persona profile selection.
- Password-protected persona login for selected laptops.
- Admin password prompt for logout and fullscreen exit protection.
- Persona-specific wallpapers and desktop layouts.
- Resizable, draggable, and maximizable desktop application windows.
- Dock reveal behavior when an app window is maximized.
- Mock Gmail interfaces with inbox, mail reading, search, compose, and attachment preview behavior.
- Mock Chrome interfaces with tabs, Google search mock page, news report page, and Weibo-style page.
- Mock Finder, Gallery, Calendar, Notes, and Photoshop-style project/detail interfaces.
- Organized assets for icons, wallpapers, evidence images, news images, Photoshop files, and post images.

## Project Structure

```text
.
|-- index.html
|-- README.md
|-- apps/
|   |-- ahe-chrome.html
|   |-- ahe-finder.html
|   |-- ahe-gallery.html
|   |-- ahe-photoshop.html
|   |-- ahe-photoshop-detail.html
|   |-- calendar.html
|   |-- empty-gmail.html
|   |-- gmail.html
|   |-- mock-chrome.html
|   |-- mock-notes.html
|   |-- shanhong-finder.html
|   |-- shanhong-gmail.html
|   |-- instagram.html
|   |-- whatsapp.html
|   `-- bank.html
|-- assets/
|   |-- icons/
|   `-- images/
|       |-- evidence/
|       |-- news/
|       |-- photoshop/
|       |-- posts/
|       `-- wallpapers/
|-- scripts/
`-- styles/
```

## Setup

No framework, backend, package install, or build step is required. The project is built with plain HTML, CSS, and vanilla JavaScript.

Requirements:

- A modern browser.
- A local static server for development.

## How To Run Locally

From the project root:

```bash
python -m http.server 8001
```

Then open:

```text
http://127.0.0.1:8001/
```

You can also use any other static server, such as VS Code Live Server.

## Deployment

The project can be deployed as a static site. The current hosted version is deployed on Vercel:

```text
https://laptop-simulator.vercel.app/
```

Because the app is static, deployment should serve the repository root with `index.html` as the entry page.

## Translation API

The translate button uses the Vercel serverless endpoint at `api/translate.js`.

For AI translation on the hosted site, add this environment variable in Vercel:

```text
GEMINI_API_KEY=<your Gemini API key>
```

Optional:

```text
GEMINI_MODEL=gemini-3.7-flash
```

If the API key is not configured, the endpoint falls back to an online translation service. If the endpoint is unavailable during local static-server development, the browser also tries the online translation service directly before using the small built-in translation map for common project terms.

The translator protects story-specific proper nouns such as character names, organization names, venue names, and artwork titles by converting them to fixed Hanyu Pinyin or romanized names instead of translating them by literal meaning.

Clicking the translate button once translates the whole application document, including hidden sections that may be opened later. Newly rendered text is translated automatically while translation mode is active. Clicking the same button again restores the original Chinese text. Account/profile menus are excluded from translation.

## Notes For Future Expansion

- Add new persona laptops by registering a new account in `scripts/desktop.js`.
- Add new application pages under `apps/`.
- Add each app's JavaScript under `scripts/` and styles under `styles/`.
- Place persona wallpapers in `assets/images/wallpapers/<persona-name>/`.
- Keep story content grounded in the provided PDFs and avoid adding unrelated details beyond the script context.
