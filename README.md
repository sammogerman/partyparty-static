[![Netlify Status](https://api.netlify.com/api/v1/badges/021c2d4f-abcb-4a0a-8e1a-6e8a4d2db703/deploy-status)](https://app.netlify.com/sites/partypartydsm/deploys)

# Party! Party!

This repository contains the codebase that powers the Party! Party! website.

The codebase isn't built with any fancy modern frameworks and largely consists
of static HTML, vanilla JS, and CSS. That said, it does a few tools to make
development and deployment easier. They include:

* [Babel]: Compiles modern JS into syntax that all common browsers support.
* [Browser Sync]: Automatically refreshes the browser as changes are made.
* [Express]: Serves the static HTML (beats opening the filesystem in a browser).
* [Gulp]: Runs tasks to utilize these tools (refer to gulpfile.js).
* [Sass]: Makes organizing and scaling CSS much less painful.

[Babel]: https://babeljs.io/
[Browser Sync]: https://www.browsersync.io/
[Express]: https://expressjs.com/
[Gulp]: https://gulpjs.com/
[Sass]: https://sass-lang.com/

## Development

1. `cd` into this directory and run `gulp serve` to start the Express server.
   This should open `http://localhost:3000` in a browser window.
1. In a separate terminal, `cd` into this directory and run `gulp watch`.
1. Edit files in the src/ directory. As you do so, `gulp watch` will compile the
   src/ files into the dist/ directory. As the dist/ files are updated, the page
   within the browser will refresh itself.

Use ctrl+C to quit the `serve` and/or `watch` processes to stop them.

If you ever want to compile the src/ files into dist/ without needing the
`serve` or `watch` behavior, simply run `gulp build`.

## Deployment

Any changes to the remote `master` branch will automatically deploy to Netlify.

## Repository structure

```
/
├─ dist/             # The compiled site that is served/deployed (gitignored)
│  ├─ _maps/         # Sourcemaps for the compiled CSS and JS files
│  ├─ **/            # Directories created for individual pages
│  ├─ index.html     # The homepage
│  ├─ scripts.js     # The compiled JS added to all pages
│  └─ styles.css     # The compiled CSS added to all pages
├─ node_modules/     # Dependencies fetched by npm (gitignored)
├─ src/
│  ├─ html/          # The HTML files to edit and be compiled
│  ├─ js/            # The JS files to edit and be compiled
│  └─ scss/          # The Sass files to edit and be compiled
│     ├─ abstracts/  # Sass utilities that don't generate any CSS on their own
│     ├─ base/       # Sass partials for sitewide, global styles
│     ├─ components/ # Sass partials for individual components
│     ├─ layout/     # Sass partials for page layout elements
│     └─ styles.scss # The primary Sass file that gets compiled into CSS
├─ .gitignore        # List of files and folders not tracked by Git
├─ gulpfile.js       # Configuration for Gulp tasks
├─ package-lock.json # A snapshot of exactly which package versions to install
├─ package.json      # Project manifest containing npm dependencies, etc.
├─ README.md         # This file
└─ server.js         # The Express server used for development
```
