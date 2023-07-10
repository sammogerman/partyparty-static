// Contains Gulp tasks for local development.
//
// @see https://gulpjs.com/

'use strict';

const gulp = require('gulp');
const babel = require('gulp-babel');
const browsersync = require('browser-sync');
const concat = require('gulp-concat');
const flatmap = require('gulp-flatmap');
const nodemon = require('gulp-nodemon');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const streamqueue = require('streamqueue');

/**
 * Copies the static src/ image assets, such as icons, into the dist/ directory.
 */
gulp.task('assets', () =>
  gulp.src('./src/assets/**/*')
    .pipe(gulp.dest('./dist/assets/'))
);

/**
 * Processes the src/ HTML files and drops the results into the dist/ directory.
 *
 * This currently achieves the following:
 * - Adds _header.html and _footer.html to the top and bottom of every HTML
 *   file (to avoid repetitive copying/pasting).
 * - Moves src/ HTML files into /dist, moving and renaming them in such a way
 *   that they'll have clearn URLs so the user never sees the .html extension.
 *   homepage.html will become the root index file, which any other file will
 *   become the index file of its own directory.
 */
gulp.task('html', () =>
  gulp.src(['./src/html/**/*.html', '!./src/html/**/_*.html'])
    .pipe(flatmap((stream, file) => {
      const dest = file.stem == 'homepage' ? 'index.html' : file.stem + '/index.html';
      return streamqueue({objectMode: true}, gulp.src('./src/html/_header.html'), stream, gulp.src('./src/html/_footer.html'))
        .pipe(concat(dest));
    }))
    .pipe(gulp.dest('./dist/'))
);

/**
 * Processes the src/ JS files and places the result into the /dist directory.
 *
 * This currently achieves the following:
 * - Runs the JS through Babel (babeljs.io). This compiles any modern JS into
 *   syntax that is supported by all modern browsers.
 * - Concatenates all JS files in /src/js into one dist/scripts.js file.
 * - Adds sourcemaps so that it's easy to figure out where the compiled JS
 *   originally came from (useful for development).
 */
gulp.task('scripts', () =>
  gulp.src('./src/js/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(concat('scripts.js'))
    .pipe(sourcemaps.write('./_maps'))
    .pipe(gulp.dest('./dist/'))
);

/**
 * Processes the src/ Sass files and places the result into the /dist directory.
 *
 * This currently achieves the following:
 * - Compiles all Sass files in /src/scss into one dist/ file.
 * - Adds sourcemaps so that it's easy to figure out where the compiled CSS
 *   originally came from (useful for development).
 */
gulp.task('styles', () =>
  gulp.src('./src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(sourcemaps.write('./_maps'))
    .pipe(gulp.dest('./dist/'))
);

/**
 * Powers the development Express server using Nodemon and Browser Sync.
 */
gulp.task('serve',
  gulp.series(
    // Starts/restarts the Express server as dist/ files change.
    cb => {
      let started = false;

      return nodemon({
        script: 'server.js'
      }).on('start', () => {
        if (!started) {
          cb();
          started = true;
        }
      });
    },
    // Automatically refreshes the browser as dist/ files change.
    () => {
      browsersync.init(null, {
        proxy: 'http://localhost:5000',
        files: ['dist/**/*.*', '!dist/_maps/*.*']
      });
    })
);

/**
 * Watches for /src file changes and runs the corresponding task(s).
 */
gulp.task('watch', () => {
  gulp.watch('./src/assets/**/*', gulp.parallel('assets'));
  gulp.watch('./src/html/**/*.html', gulp.parallel('html'));
  gulp.watch('./src/js/**/*.js', gulp.parallel('scripts'));
  gulp.watch('./src/scss/**/*.scss', gulp.parallel('styles'));
});

/**
 * Performs a one-time build of all src/ assets into dist/.
 */
gulp.task('build', gulp.parallel('assets', 'html', 'scripts', 'styles'));
