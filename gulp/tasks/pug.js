import webpHtmlNosvg from "gulp-webp-html-nosvg";
import versionNumber from "gulp-version-number";
import pugs from "gulp-pug";

export const pug = () => {
  return app.gulp
    .src(app.path.src.pug)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "PUG",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(
      pugs({
        pretty: app.isDev,
        verbose: app.isBuild,
      })
    )
    .pipe(app.plugins.replace(/@img\//g, "img/"))
    .pipe(app.plugins.replace(/@svg\//g, "img/svgicons/icons.svg#"))
    .pipe(app.plugins.if(app.isBuild, webpHtmlNosvg()))
    .pipe(
      app.plugins.if(
        app.isDev,
        versionNumber({
          value: "%DT%",
          append: {
            key: "_v",
            cover: 0,
            to: ["css", "js"],
          },
          output: {
            file: "gulp/version.json",
          },
        })
      )
    )
    .pipe(app.gulp.dest(app.path.build.pug))
    .pipe(app.plugins.browsersync.stream());
};
