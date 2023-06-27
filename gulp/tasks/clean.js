import {deleteAsync} from "del";

export const clean = () => {
  return deleteAsync(app.path.clear);
};
export const cleanFontsSass = () => {
  return deleteAsync([app.path.src.fontsStyle, app.path.build.fonts]);
};
