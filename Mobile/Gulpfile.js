var gulp = require("gulp"),
    connect = require("gulp-connect");

gulp.task('default', function() {
    connect.server({
        root: './',
        port: 8090
    });
});
