const gulp = require('gulp'),
      sass = require('gulp-sass'),
      smushit = require('gulp-smushit');
      

gulp.task('sass', function(cb) {
  gulp
    .src('./asset/style/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(
      gulp.dest(function() {
        return './asset/style/css';
      })
    );
  cb();
});

gulp.task(
  'default', function(){
    gulp.src('./img/*.{jpg, png}')
          .pipe(smushit())
          .pipe(gulp.dest(function() {
            return './asset/imgs'
          }));
          
    gulp.watch('./asset/style/*.scss', gulp.series('sass'))
  }
);