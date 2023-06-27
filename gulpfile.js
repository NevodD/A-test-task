import gulp from "gulp";
import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";

global.app = {
  isBuild: process.argv.includes("--build"),
  isDev: !process.argv.includes("--build"),
  path: path,
  gulp: gulp,
  plugins: plugins,
};

import { copyFiles, copyFonts, copyRobots } from "./gulp/tasks/copy.js";
import { clean, cleanFontsSass } from "./gulp/tasks/clean.js";
import { html } from "./gulp/tasks/html.js";
import { pug } from "./gulp/tasks/pug.js";
import { server } from "./gulp/tasks/server.js";
import { sass } from "./gulp/tasks/sass.js";
import { js } from "./gulp/tasks/js.js";
import { img } from "./gulp/tasks/img.js";
import { zip } from "./gulp/tasks/zip.js";
import { ftp } from "./gulp/tasks/ftp.js";
import { svgSprite } from "./gulp/tasks/svgSprite.js";
import { otfToTtf, ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js";
import { favicon } from "./gulp/tasks/favicon.js";

export {favicon}
export { clean };
export { svgSprite };
const fonts = gulp.series(
  cleanFontsSass,
  copyFonts,
  otfToTtf,
  ttfToWoff,
  fontsStyle
);

const watcher = () => {
  gulp.watch(path.watch.files, copyFiles);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.pug, pug);
  gulp.watch(path.watch.sass, sass);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.img, img);
  gulp.watch(path.watch.svgicons, svgSprite);
  gulp.watch(path.watch.fonts, fonts);
  gulp.watch(path.watch.favicon, favicon);
};

const mainTasks = gulp.series(
  fonts,
  gulp.parallel(copyFiles, html, /* pug, */ sass, js, img, svgSprite, favicon, copyRobots)
);

const dev = gulp.series(clean, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(clean, mainTasks);
const deployZIP = gulp.series(clean, mainTasks, zip);
const deployFTP = gulp.series(clean, mainTasks, ftp);

export { dev };
export { build };
export { deployZIP };
export { deployFTP };

gulp.task("default", dev);
