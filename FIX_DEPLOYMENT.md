# CRITICAL FIX: "404 Failed to load resource"

You are seeing this error because GitHub is trying to run the **raw code** (source files) instead of the **built website**.

## YOU MUST CHANGE THIS SETTING ON GITHUB:

1.  Go to your Repository.
2.  Click **Settings** (top right tab).
3.  Click **Pages** (left sidebar, near the bottom).
4.  Look at the **Build and deployment** section.
5.  Change **Source** from `Deploy from a branch` -> to **`GitHub Actions`**.

![GitHub Pages Source Setting](https://docs.github.com/assets/cb-33921/images/help/pages/pages-build-deployment-source-actions.png)
*(Example image of what to look for)*

### Why this happens?
- **Deploy from branch**: Serves `index.html` from your code, which points to `/src/main.tsx`. Browsers can't run `.tsx` files directly.
- **GitHub Actions**: Runs `npm run build` (which I set up), converts everything to real HTML/JS, and serves that correct version.
