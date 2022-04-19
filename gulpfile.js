const {src , dest, watch, series, parallel} = require('gulp')
const rename = require("gulp-rename");
const del = require('del');
const browserSync = require('browser-sync').create();
const newer = require('gulp-newer')
const sourcemaps = require('gulp-sourcemaps');
//Плагины----------------------------------------
//html
const includeFile = require('gulp-file-include')
const htmlmin = require('gulp-htmlmin');

//styles
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const sass = require('gulp-sass')(require('sass'));

//scripts
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

//img
const imagemin = require('gulp-imagemin');

//fonts
const fonter = require('gulp-fonter');
const ttf2woff2 = require('gulp-ttf2woff2');
//Плагины----------------------------------------

const paths ={
    html: {
        src: 'src/html/*.html',
        dest: 'public/',
    },
    styles: {
        src: 'src/styles/**/*.+(scss|css)',
        dest: 'public/css/',
    },
    scripts: {
        src: 'src/scripts/**/*.js',
        dest: 'public/js/',
    },
    img: {
        src: 'src/img/**/*.+(png|svg|jpg|jpeg|gif)',
        dest: 'public/img/',
    },
    fonts: {
        src: 'src/font/**/*',
        dest: 'public/font/',
    },
    favicon: {
        src: 'src/favicon.+(ico|png|svg)',
        dest: 'public/',
    },
}

//Обработка HTML
const html = () => {
    return src(paths.html.src)
        .pipe(includeFile())
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(dest(paths.html.dest))
        .pipe(browserSync.stream())
}
//Обработка SCSS-SASS
const scss = () => {
    return src(paths.styles.src)
    .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 10 version'],
            grid: true
        }))
        .pipe(rename({suffix: ".min" }))
        .pipe(csso())
        .pipe(sourcemaps.write())
        .pipe(dest(paths.styles.dest))
        .pipe(browserSync.stream())
}
//Обработка JS
const js = () => {
    return src(paths.scripts.src)
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(dest(paths.scripts.dest))
        .pipe(browserSync.stream())
}
//Обработка Изображений
const img = () => {
    return src(paths.img.src)
        .pipe(newer(paths.img.dest))
        .pipe(imagemin())
        .pipe(dest(paths.img.dest))
        .pipe(browserSync.stream())
}

//Обработка favicon
const favicon = () => {
    return src(paths.favicon.src)
        .pipe(dest(paths.favicon.dest))
}

//Обработка Шрифтов
const font = () => {
    return src(paths.fonts.src)
        .pipe(newer(paths.fonts.src))
        .pipe(fonter({
            formats: ["ttf","woff","eot","svg"]
        }))
        .pipe(dest(paths.fonts.dest))
        .pipe(ttf2woff2())
        .pipe(dest(paths.fonts.dest))
        .pipe(browserSync.stream())
}
//Наблюдатель
const watcher = () => {
    watch('src/html/**/*.html' ,html).on("change", browserSync.reload);
    watch(paths.styles.src, scss).on("change", browserSync.reload);
    watch(paths.scripts.src, js).on("change", browserSync.reload);
    watch(paths.img.src, img).on("change", browserSync.reload);
    watch(paths.fonts.src, font).on("change", browserSync.reload);
}

const clear = () => {
    return del("./public")
}

const server = () =>{
    browserSync.init({
        server: {
            baseDir: "./public"
        }
    })
}

//taskи
exports.html = html;
exports.scss = scss;
exports.js = js;
exports.img = img;
exports.font = font;
exports.watch = watcher;
exports.clear = clear;
exports.server = server;

//Сборка в режиме разработки
exports.start = series(
    parallel(html, img, scss, js, font, favicon),
    parallel(watcher, server)
)
//Сборка в режиме production
exports.build = series(
    clear,
    parallel(html, scss, js, img, font),
)