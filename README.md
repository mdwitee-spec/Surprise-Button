# Surprise Button

A tiny one-button web app. Click **Surprise me!** for a random joke, compliment, mini challenge, color shift, or confetti burst.

## Project structure

```
surprise-button/
├── index.html    # Page markup
├── style.css     # Layout and styling
├── app.js        # Surprise logic and effects
└── README.md     # This file
```

No build tools or dependencies — plain HTML, CSS, and JavaScript.

## Run locally

Open `index.html` in your browser, or serve the folder:

```bash
npx serve .
```

## Deploy to GitHub Pages

1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Choose branch `main` and folder `/ (root)`.
5. Save. Your site will be live at `https://<username>.github.io/surprise-button/`.

## Features

- **Random surprises** — jokes, compliments, challenges, and fun facts
- **Mood shift** — background and button colors change on some clicks
- **Confetti** — party mode animation
- **No repeats** — won't show the same surprise twice in a row
