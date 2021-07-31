"use strict";

import gulp from 'gulp';
import gutil from 'gulp-util';
import uglify from 'gulp-uglify';
import cleanCSS from 'gulp-clean-css';
import htmlmin from 'gulp-htmlmin';
import imagemin from 'gulp-imagemin';
import nodemon from 'gulp-nodemon';
import del from 'del';

const DIR = {
    SRC: 'src',
    DEST: 'dist'
};

const SRC = {
    JS: `${DIR.SRC}/js/*.js`,
    CSS: `${DIR.SRC}/css/*.css`,
    HTML: `${DIR.SRC}/*.html`,
    IMAGES: `${DIR.SRC}/images/*`
};

const DEST = {
    JS: `${DIR.DEST}/js`,
    CSS: `${DIR.DEST}/css`,
    HTML: `${DIR.DEST}/`,
    IMAGES: `${DIR.DEST}/images`
}

// minify javascript
gulp.task('js', async () => {
    return gulp.src(SRC.JS, { sourcemaps: true })
            .pipe(uglify())
            .pipe(gulp.dest(DEST.JS));
});

// minify css
gulp.task('css', async () => {
    return gulp.src(SRC.CSS, { sourcemaps: true })
           .pipe(cleanCSS({compatibility: 'ie8'}))
           .pipe(gulp.dest(DEST.CSS));
});

// minify html
gulp.task('html', async () => {
    return gulp.src(SRC.HTML, { sourcemaps: true })
          .pipe(htmlmin({collapseWhitespace: true}))
          .pipe(gulp.dest(DEST.HTML))
});

// compress images
gulp.task('images', async () => {
    return gulp.src(SRC.IMAGES, { sourcemaps: true })
           .pipe(imagemin())
           .pipe(gulp.dest(DEST.IMAGES));
});

// clean
gulp.task('clean', async () => {
    return del.sync([DIR.DEST]);
});

// file changed logging && restart
gulp.task('watch', () => {
    
    // file changed logging
    let watcher = {
        js: gulp.watch(SRC.JS, gulp.series(['js'])),
        css: gulp.watch(SRC.CSS, gulp.series(['css'])),
        html: gulp.watch(SRC.HTML, gulp.series(['html'])),
        images: gulp.watch(SRC.IMAGES, gulp.series(['images']))
    };

    let changeNotify = event => {
        gutil.log(`File : ${gutil.colors.yellow(event)}, was changed`);
    };

    for(let key in watcher) {
        watcher[key].on('change', changeNotify);
    }

    // restart
    let stream = nodemon({
        script: `${DEST.JS}/app.js`,
        watch: SRC.JS
    });

    return stream;
});

gulp.task('build', gulp.series(['clean', 'js', 'css', 'html', 'images']), () => {
    return gutil.log(`Gulp build success`);
})

gulp.task('default', gulp.series(['build', 'watch']), async () => {
    return gutil.log('Gulp is running!');
});