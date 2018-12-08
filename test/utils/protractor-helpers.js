export { isFocused } from 'wix-ui-test-utils/protractor';

// TODO: protractor helper methods should be moved to wix-ui-test-utils/protractor
/**
 * Protractor helper for checking the presence of an attribute.
 */
export const hasAttribute = (elementFinder, attributeName) =>
  elementFinder.getAttribute(attributeName).then(value => value !== null);
/**
 * Protractor helper for checking the presence of a css class name.
 */
export const hasClass = (element, className) =>
  element
    .getAttribute('class')
    .then(classes => classes.split(' ').some(c => c.includes(className)));

export const disableCSSAnimation = () => {
  const css =
      '* {' +
      '-webkit-transition-duration: 0s !important;' +
      'transition-duration: 0s !important;' +
      '-webkit-animation-duration: 0s !important;' +
      'animation-duration: 0s !important;' +
      '}',
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');

  style.type = 'text/css';
  style.appendChild(document.createTextNode(css));
  head.appendChild(style);
};
