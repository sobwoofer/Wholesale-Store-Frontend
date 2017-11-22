var path = {
    build: { //These finished after building files
        html: 'build/',
        js: 'build/js/',
        css: 'build/css/',
        img: 'build/img/',
        fonts: 'build/fonts/',
        libs: 'build/libs/'
    },
    src: { //Paths from getting sources
        html: 'src/web-*/*.html',
        js: 'src/js/*.js',
        style: 'src/style/main.scss',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*',
        libs: 'bower_components/**/*.*'
    },
    watch: { //What kind of files and paths we want to watching.
        html: 'src/**/*.html',
        js: 'src/js/**/*.js',
        style: 'src/style/**/*.scss',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*',
        libs: 'bower_components/**/*.*'
    },
    clean: './build'
};


var gulp = require('gulp'),
    sass = require('gulp-sass'), // for compilate scss to css
    rigger = require('gulp-rigger'), //rigger for including files in parent file
    // watch = require('gulp-watch'), // for watching your motions
    browserSync = require("browser-sync"),
    reload = browserSync.reload, //for created local server and tunnel to your network
    cssmin = require('gulp-minify-css'), //for js minimization
    imagemin = require('gulp-imagemin'), //for images minimization
    pngquant = require('imagemin-pngquant'), // for png quant minimization
    rimraf = require('rimraf'), //for remove files and directories
    uglify = require('gulp-uglify'); //for minimization texts

var config = { //config of our dev server
    server: {
        baseDir: "./build"
    },
    tunnel: true,
    host: 'localhost',
    port: 9000,
    logPrefix: "Frontend_Devil"
};

//html build
gulp.task('html:build', function () {
    gulp.src(path.src.html)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.html))
        .pipe(reload({stream: true}));
});

//js build
gulp.task('js:build', function () {
    gulp.src(path.src.js)
        .pipe(rigger())
        .pipe(uglify())
        .pipe(gulp.dest(path.build.js))
        .pipe(reload({stream: true}));
});

//sass build
gulp.task('style:build', function () {
    gulp.src(path.src.style)
        .pipe(sass())
        .pipe(cssmin())
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({stream: true}));
});

//image build
gulp.task('image:build', function () {
    gulp.src(path.src.img)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(path.build.img))
        .pipe(reload({stream: true}));
});

//libs build
gulp.task('libs:build', function() {
    gulp.src(path.src.libs)
        .pipe(gulp.dest(path.build.libs))
});


//fonts build
gulp.task('fonts:build', function() {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
});

//task who doing all builds
gulp.task('build', [
    'html:build',
    'js:build',
    'style:build',
    'fonts:build',
    // 'image:build',
    'libs:build'
]);

//clean build directory
gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});

//task for configure web server
gulp.task('webserver', function () {
    browserSync(config);
});


//task who watching your motions
gulp.task('watch', function(){

    gulp.watch([path.watch.html], function(event, cb) {
        console.log(event);
        console.log('html:build');
        gulp.start('html:build');
    });

    gulp.watch([path.watch.style], function(event, cb) {
        console.log(event);
        console.log('style:build');
        gulp.start('style:build');
    });
    gulp.watch([path.watch.js], function(event, cb) {
        console.log(event);
        console.log('js:build');
        gulp.start('js:build');
    });
    gulp.watch([path.watch.img], function(event, cb) {
        console.log(event);
        console.log('image:build');
        gulp.start('image:build');
    });
    gulp.watch([path.watch.fonts], function(event, cb) {
        console.log(event);
        console.log('fonts:build');
        gulp.start('fonts:build');
    });
});



gulp.task('default', ['build', 'webserver', 'watch']);



