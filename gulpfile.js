const gulp = require('gulp');
// const {src, dest, series, watch} = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const watch = require('gulp-watch');
// const csso = require('gulp-csso');
// const include = require('gulp-file-include');
// const htmlmin = require('gulp-htmlmin');
// const del = require('del');
// const concat = require('gulp-concat');
// const autoprefixer = ('gulp-autoprefixer');
// const sync = require('browser-sync').create();

// function html() {
//     return src('src/**.html')
//         .pipe(include({
//             prefix: '@@'
//         }))
//         .pipe(dest('dist'))
//         .pipe(autoprefixer({
//             browsers: ['last 2 versions']
//         }))
//         .pipe(csso())
//         .pipe(concat('style.css'))
//         .pipe(htmlmin({
//             collapseWhitespace: true
//         }))
//         .pipe(dest('css'))
// }
//
// function scss() {
//     return src('Unistex/scss/**.scss')
//         .pipe(sass())
//         .pipe()
// }
//
// function clear() {
//     return del('dist')
// }
//
// function serve() {
//     sync.init({
//         server: './dist'
//     })
//
//     watch('src/**.html', series(html)).on('change', sync.reload)
//     watch('src/scss/**.scss', series(scss)).on('change', sync.reload)
// }
//
// exports.build = series(clear, scss, html)
// exports.serve = series(clear, scss, html, serve)
// exports.clear = clear



gulp.task('sass-compile', function() {
    return gulp.src('./scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./css/'))
})

gulp.task('watch', function() {
    gulp.watch('./scss/**/*.scss', gulp.series('sass-compile'))
})