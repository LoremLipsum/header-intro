import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import config from '../config'

const $ = gulpLoadPlugins();

module.exports = () => (
  gulp.src(config.src.images)
    .pipe($.newer(config.dest.images))
    .pipe($.if('*.{jpg,png}',
      $.imagemin([
        $.imagemin.jpegtran({ progressive: true }),
        $.imagemin.optipng({ optimizationLevel: 3 }),
      ])
    ))
    .pipe($.if('*.svg',
      $.svgmin({
        js2svg: {
            pretty: true
        },
        plugins: [{
            removeDesc: true
        }, {
            cleanupIDs: true
        }, {
            mergePaths: false
        }]
      })
    ))
    .pipe($.rename({
      dirname: '',
    }))
    .pipe(gulp.dest(config.dest.images))
);
