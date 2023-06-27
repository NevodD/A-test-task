export const copyFiles = () => {
  return app.gulp
    .src(app.path.src.files)
    .pipe(app.gulp.dest(app.path.build.files));
};

export const copyRobots = () => {
  return app.gulp
    .src(`${app.path.srcFolder}/robots.txt`)
    .pipe(app.gulp.dest(app.path.buildFolder));
};

export const copyFonts = () => {
  return app.gulp
    .src(`${app.path.srcFolder}/fonts/*.woff2`, {})
    .pipe(app.gulp.dest(`${app.path.build.fonts}`));
};
