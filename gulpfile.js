import gulp from 'gulp';
import nodemon from 'gulp-nodemon';

gulp.task('watch', function() {
    let stream = nodemon({
        script: 'src/app.js',
        watch: './src'
    })
    return stream;
});

gulp.task('dev', gulp.series('watch', () => {gutil.log(`Gulp is running`)}));
gulp.task('default', gulp.series('dev'));