const gulp = require("gulp");
const server = require("gulp-server-livereload");

gulp.task("build", function (callback) {
    console.log("Construyendo el sitio");
    setTimeout(callback, 1200);
});

gulp.task("serve", function (callback) {
    gulp.src("www")
    .pipe(server({
        livereload: true,
        open: true,
    }))
});

gulp.task("default", gulp.series("build", "serve"));