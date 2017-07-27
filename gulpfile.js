var gulp 					= require('gulp'),
		sass 					= require('gulp-sass'),
		autoprefixer 	= require('gulp-autoprefixer'),
		browserSync 	= require("browser-sync");


gulp.task('browser-sync', function(){
	browserSync({
		port:9000,
		server:{
			baseDir:''
		},
		notify: false
	});
});

gulp.task('sass', function(){
	return gulp.src('sass/*scss')
	.pipe(sass())
	.pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
	.pipe(gulp.dest('css/'))
	.pipe(browserSync.reload({stream:true}))
});

gulp.task('watch', ['browser-sync','sass'],function(){
	gulp.watch('sass/**/*.scss', ['sass']);
	gulp.watch('*.html', browserSync.reload);
});