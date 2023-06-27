import webp from "gulp-webp";
import imagemin from "gulp-imagemin";

export const img = () => {
  return app.gulp
    .src(app.path.src.img)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "IMG",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(app.plugins.if(app.isBuild, app.gulp.src(app.path.src.img)))
    .pipe(app.plugins.if(app.isBuild, webp()))
    .pipe(app.plugins.newer(app.path.build.img))
    .pipe(app.plugins.if(app.isBuild, app.gulp.dest(app.path.build.img)))
    .pipe(app.plugins.if(app.isBuild, app.gulp.src(app.path.src.img)))
    .pipe(
      app.plugins.if(
        app.isBuils,
        imagemin({
          perspective: true,
          svgoPlugins: [{ removeViewBox: false }],
          interlaced: true,
          optimizationLevel: 3,
        })
      )
    )
    .pipe(app.plugins.if(app.isBuild, app.plugins.newer(app.path.build.img)))
    .pipe(app.gulp.dest(app.path.build.img))
    .pipe(app.gulp.src(app.path.src.svg))
    .pipe(app.plugins.if(app.isBuild, imagemin()))
    .pipe(app.plugins.if(app.isBuild, app.plugins.newer(app.path.build.img)))
    .pipe(app.gulp.dest(app.path.build.img))
    .pipe(app.plugins.browsersync.stream());
};
