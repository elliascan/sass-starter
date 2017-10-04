const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

//Compile Sass
gulp.task('sass', function(){
	return gulp.src(['sass/*.sass'])
		.pipe(sass())
		.pipe(gulp.dest('css'))
		.pipe(browserSync.stream());
});

//Watch & Serve
gulp.task('serve', ['sass'], function(){
	browserSync.init({
		server: '.'
	});

	gulp.watch(['sass/*sass'], ['sass']);
	gulp.watch(['*.html']).on('change', browserSync.reload);
});

//Default
gulp.task('default', ['serve']);