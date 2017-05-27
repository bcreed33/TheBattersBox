var gulp = require('gulp');




//var cleanCSS = require('gulp-clean-css');

//gulp.task('mincss', function() {
//  return gulp.src('working/css/*.css')
//    .pipe(cleanCSS({compatibility: 'ie8'}))
 //   .pipe(gulp.dest('css/'));
//});


var cleanCSS = require('gulp-clean-css');
var concatCss = require('gulp-concat-css');
gulp.task('mincss', function() {
  return gulp.src(['working/css/reset.css',
                  'working/css/style.css'])
  .pipe(concatCss("cssbundle.css"))
   .pipe(cleanCSS())
.pipe(gulp.dest('css/'));
});




//var imagemin = require('gulp-imagemin');

//gulp.task('minimg', () =>
//    gulp.src('working/img/*')
//        .pipe(imagemin())
//        .pipe(gulp.dest('img/'))
//);



var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var pump = require('pump');
gulp.task('catjs', function () {
  gulp.src(['working/js/contactForm.js',
  'working/js/script.js',
            'working/js/jquery-ui.min.js',
            'working/js/menuscript.js'])
    .pipe(concat("allscript.js"))
    .pipe(uglify())
    .pipe(gulp.dest('js/'));
});

gulp.task('catFoodjs', function () {
  gulp.src('working/json/*.js')
    .pipe(concat("allfood.js"))
    .pipe(uglify())
    .pipe(gulp.dest('js/'));
});


//sass
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('working/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('working/css/'));
});




var watch = require('gulp-watch');
gulp.task('watch', function(){
    gulp.watch('working/sass/*.scss', ['sass']);
    gulp.watch('working/css/*.css', ['mincss']);
    //gulp.watch('working/img/*', ['minimg']);
     gulp.watch('working/js/*.js', ['catjs']);
     gulp.watch('working/json/*.js', ['catFoodjs']);


});

gulp.task('default', ['sass','mincss','catjs','catFoodjs', 'watch'])
