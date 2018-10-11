
export const convertFromUxLangToCss = (ux = '') =>
  ux.toLowerCase().replace('.', '_');

export const convertFromCssToUxLang = (css = '') =>
  css.toUpperCase().replace('_', '.');
