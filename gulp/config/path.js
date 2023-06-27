import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = "./dist";
const srcFolder = "./src";

export const path = {
  build: {
    html: `${buildFolder}/`,
    pug: `${buildFolder}/`,
    css: `${buildFolder}/css/`,
    js: `${buildFolder}/js/`,
    files: `${buildFolder}/files/`,
    fonts: `${buildFolder}/fonts/`,
    img: `${buildFolder}/img/`,
    svgicons: `${buildFolder}/img/svgicons`,
    favicon: `${buildFolder}/img/favicon/`,

  },

  src: {
    html: `${srcFolder}/html/*.html`,
    pug: `${srcFolder}/pug/*.pug`,
    sass: `${srcFolder}/sass/style.sass`,
    fontsStyle: `${srcFolder}/sass/fonts.sass`,
    fonts: `${srcFolder}/fonts/*.*`,
    js: `${srcFolder}/js/*.js`,
    files: `${srcFolder}/files/**/*.*`,
    img: [`${srcFolder}/img/**/*.*`, `!${srcFolder}/img/**/*.svg`],
    svg: [`${srcFolder}/img/**/*.svg`, `!${srcFolder}/img/svgicons/**/*.*`, `!${srcFolder}/img/svgInline/**/*.*`],
    svgicons: `${srcFolder}/img/svgicons/**/*.svg`,
    favicon: `${srcFolder}/img/favicon/favicon.*`,
  },

  watch: {
    html: `${srcFolder}/html/**/*.html`,
    pug: `${srcFolder}/pug/**/*.pug`,
    sass: `${srcFolder}/sass/**/*.sass`,
    js: `${srcFolder}/js/**/*.js`,
    files: `${srcFolder}/files/**/*.*`,
    img: `${srcFolder}/img/**/*.*`,
    svgicons: `${srcFolder}/img/svgicons/**/*.svg`,
    fonts: `${srcFolder}/fonts/*.*`,
    favicon: `${srcFolder}/img/favicon/favicon.*`,

  },

  clear: buildFolder,

  buildFolder: buildFolder,

  srcFolder: srcFolder,

  rootFolder: rootFolder,

  ftp: ``,
};
