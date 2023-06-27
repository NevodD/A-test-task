import dartSass from "sass";
import gulpSass from "gulp-sass";
const scss = gulpSass(dartSass);
import rename from "gulp-rename";
import shorthand from "gulp-shorthand";
import groupCssMediaQuerieshand from "gulp-group-css-media-queries";
import autoprefixer from "gulp-autoprefixer";
import sassGlob from "gulp-sass-glob";
import webpCss from "gulp-webpcss";
import cleanCSS from "gulp-clean-css";

export const sass = () => {
  return app.gulp
    .src(app.path.src.sass, { sourcemaps: app.isDev })
    .pipe(app.plugins.if(app.isBuild,
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "SASS",
          message: "Error: <%= error.message %>",
        })
      ))
    )
    .pipe(sassGlob())
    .pipe(
      scss({
        outputStyle: "expanded",
      })
    )
    .pipe(app.plugins.if(app.isBuild, 
      webpCss({
        webpClass: ".webp",
        noWebpClass: "no.webp",
      }))
    )
    .pipe(app.plugins.if(app.isBuild, 
      autoprefixer({
        grid: true,
        // overrideBrowserlist: ["last 4 version"],
        cascade: true,
      }))
    )
    .pipe(app.plugins.replace(/@img\//g, "../img/"))
    .pipe(app.plugins.replace(/@svg\//g, "../img/svgicons/icons.svg#"))
    // .pipe(app.gulp.dest(app.path.build.css, { sourcemaps: app.isDev }))
    // .pipe(shorthand())
    .pipe(app.plugins.if(app.isBuild, groupCssMediaQuerieshand()))
    .pipe(app.plugins.if(app.isBuild, cleanCSS()))
    // .pipe(
    //   rename({
    //     extname: ".min.css",
    //   })
    // )
    .pipe(app.gulp.dest(app.path.build.css, { sourcemaps: app.isDev }))
    .pipe(app.plugins.browsersync.stream());
};
