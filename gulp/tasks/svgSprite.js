import svgSprive from "gulp-svg-sprite";



export const svgSprite = () => {
  return app.gulp
    .src(app.path.src.svgicons)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "svgSprive",
          message: "Error: <%= error.message %>",
        })
      )
    )
    // .pipe(app.plugins.newer(app.path.build.svgicons))
    // .pipe(app.plugins.if(app.isBuild, app.plugins.imagemin()))
    .pipe(
      svgSprive({
        mode: {
          stack: {
            sprite: `../icons.svg`,
            example: app.isDev,
          },
        },
      })
    )
    .pipe(app.gulp.dest(app.path.build.svgicons))
    .pipe(app.plugins.browsersync.stream());
};
