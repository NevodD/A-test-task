import fs from "fs";
import fonter from "gulp-fonter";
import ttf2woff2 from "gulp-ttf2woff2";

export const otfToTtf = () => {
  return (
    app.gulp
      .src(`${app.path.srcFolder}/fonts/*.{otf,eot,woff}`, {})
      .pipe(
        app.plugins.plumber(
          app.plugins.notify.onError({
            title: "FONTS",
            message: "Error: <%= error.message %>",
          })
        )
      )
      // .pipe(app.plugins.newer(app.path.build.fonts))
      .pipe(
        fonter({
          formats: ["ttf"],
        })
      )
      .pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/fontsGulp/`))
  );
};
export const ttfToWoff = () => {
  return (
    app.gulp
      .src(
        [
          `${app.path.srcFolder}/fonts/*.ttf`,
          `${app.path.srcFolder}/fonts/fontsGulp/*.ttf`,
        ],
        {}
      )
      .pipe(
        app.plugins.plumber(
          app.plugins.notify.onError({
            title: "FONTS",
            message: "Error: <%= error.message %>",
          })
        )
      )
      // .pipe(app.plugins.newer(app.path.build.fonts))
      .pipe(
        fonter({
          formats: ["woff"],
        })
      )
      .pipe(app.gulp.dest(`${app.path.build.fonts}`))
      .pipe(
        app.gulp.src([
          `${app.path.srcFolder}/fonts/*.ttf`,
          `${app.path.srcFolder}/fonts/fontsGulp/*.ttf`,
        ])
      )
      .pipe(ttf2woff2())
      // .pipe(app.plugins.newer(app.path.build.fonts))
      .pipe(app.gulp.dest(`${app.path.build.fonts}`))
      .pipe(app.plugins.browsersync.stream())
  );
};

export const fontsStyle = () => {
  let fontsFile = `${app.path.srcFolder}/sass/fonts.sass`;

  fs.readdir(app.path.build.fonts, function (err, fontsFiles) {
    if (fontsFiles) {
      if (!fs.existsSync(fontsFile)) {
        fs.writeFile(fontsFile, "", cb);
        let newFileOnly;
        for (let i = 0; i < fontsFiles.length; i++) {
          let fontFileName = fontsFiles[i].split(".")[0];
          if (newFileOnly !== fontFileName) {
            let fontName = fontFileName.split("-")[0]
              ? fontFileName.split("-")[0]
              : fontFileName;
            let fontWeight = fontFileName.split("-")[1]
              ? fontFileName.split("-")[1]
              : fontFileName;
            let fontFormat =
              fontWeight.split(/(?=[A-Z])/).join(" ") != "Regular"
                ? fontWeight.split(/(?=[A-Z])/).join(" ")
                : "";
            let fontLocalName = (fontName + " " + fontFormat).trim();
            let fontStyle = fontWeight.toLowerCase().includes("italic")
              ? "italic"
              : "normal";
            let fontWeightNumber;
            if (
              fontWeight.toLowerCase() == "thin" ||
              fontWeight.toLowerCase() == "thinitalic"
            ) {
              fontWeightNumber = 100;
            } else if (
              fontWeight.toLowerCase() == "extralight" ||
              fontWeight.toLowerCase() == "extralightitalic"
            ) {
              fontWeightNumber = 200;
            } else if (
              fontWeight.toLowerCase() == "light" ||
              fontWeight.toLowerCase() == "lightitalic"
            ) {
              fontWeightNumber = 300;
            } else if (
              fontWeight.toLowerCase() == "medium" ||
              fontWeight.toLowerCase() == "mediumitalic"
            ) {
              fontWeightNumber = 500;
            } else if (
              fontWeight.toLowerCase() == "semibold" ||
              fontWeight.toLowerCase() == "semibolditalic"
            ) {
              fontWeightNumber = 600;
            } else if (
              fontWeight.toLowerCase() == "bold" ||
              fontWeight.toLowerCase() == "bolditalic"
            ) {
              fontWeightNumber = 700;
            } else if (
              fontWeight.toLowerCase() == "extrabold" ||
              fontWeight.toLowerCase() == "extrabolditalic"
            ) {
              fontWeightNumber = 800;
            } else if (
              fontWeight.toLowerCase() == "black" ||
              fontWeight.toLowerCase() == "blackitalic"
            ) {
              fontWeightNumber = 900;
            } else {
              fontWeightNumber = 400;
            }
            fs.appendFile(
              fontsFile,
              `@font-face
                \n\tfont-family: ${fontName}
                \n\tfont-display: swap
                \n\tsrc: local('${fontLocalName}'), local('${fontFileName}'), url("../fonts/${fontFileName}.woff2") format("woff2"), url("../fonts/${fontFileName}.woff") format("woff")
                \n\tfont-weight: ${fontWeightNumber}
                \n\tfont-style: ${fontStyle}
              \r\n`,
              cb
            );
            newFileOnly = fontFileName;
          } else {
            console.log(
              "Файл sass/fonts.sass уже существует, для его обновлления нужно его удалить"
            );
          }
        }
      }
    }
  });
  return app.gulp.src(`${app.path.srcFolder}`);
  function cb() {}
};
