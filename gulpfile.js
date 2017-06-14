// Gulp
// http://gulpjs.com/
// npm install gulp
// npm install --only=dev
var gulp = require('gulp');

// Gulp Util
// https://www.npmjs.com/package/gulp-util
// npm install gulp-util
var gutil = require('gulp-util');

// Babel
// https://www.npmjs.com/package/gulp-babel
// npm install gulp-babel --save-dev babel-preset-es2015
const babel = require('gulp-babel');

// Babel - Babili
// https://www.npmjs.com/package/gulp-babili
// npm install gulp-babili --save-dev
const babili = require("gulp-babili");

// Gulp Rename
// https://www.npmjs.com/package/gulp-rename
// npm install gulp-rename --save-dev
var rename = require("gulp-rename");

// Sass
// https://www.npmjs.com/package/gulp-sass
// npm install gulp-sass --save-dev
var sass = require('gulp-sass');

// PostCSS
// https://www.npmjs.com/package/gulp-postcss
// npm install gulp-postcss --save-dev
var postcss = require('gulp-postcss');

// Stylelint
// https://www.npmjs.com/package/gulp-stylelint
// https://stylelint.io/user-guide/
// npm install gulp-stylelint --save-dev
// Stylelint — Standard Config
// https://www.npmjs.com/package/stylelint-config-standard
// npm install stylelint-config-standard --save-dev
const gulpStylelint = require('gulp-stylelint');

// CSSnano
// https://www.npmjs.com/package/gulp-cssnano
// npm install gulp-cssnano --save-dev
var nano = require('gulp-cssnano');

// Source Maps
// npm install gulp-sourcemaps --save-dev
// https://www.npmjs.com/package/gulp-sourcemaps
var sourcemaps = require('gulp-sourcemaps');

// Autoprefixer
// https://www.npmjs.com/package/gulp-autoprefixer
// npm install gulp-autoprefixer --save-dev
var autoprefixer = require('autoprefixer');

gulp.task('default', () => {
  return gulp.src('assets/scss/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass()) // using gulp-sass
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulpStylelint({
      reporters: [
        {
          formatter: 'verbose', console: true
        }
      ]
    }))
    .pipe(nano())
    .pipe(rename('ilsv.min.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('assets/css'))
});

gulp.task('watch', () => {
  gulp.watch('assets/scss/**/*.scss', ['default']);
});

gulp.task('babel', () => {
  return gulp.src('assets/js-pre-babel/ilsv.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(babili({
      mangle: {
        keepClassNames: true
      } 
    }))
    .pipe(rename('ilsv.min.js'))
    .pipe(gulp.dest('assets/js'));
});

gulp.task('babel watch', () => {
  gulp.watch('assets/js-pre-babel/*.js', ['babel']);
});
