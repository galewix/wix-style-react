import { isClassExists } from '../../test/utils';

export default ({ element }) => ({
  exists: () => !!element,
  hasClass: className => isClassExists(element, className),
  backgroundImageExists: () =>
    !!element.querySelector('[data-hook="page-background-image"]'),
  gradientClassNameExists: () =>
    !!element.querySelector('[data-hook="page-gradient-class-name"]'),
  tailExists: () => !!element.querySelector('[data-hook="page-tail"]'),
  gradientContainerHeight: () =>
    element.querySelector('[data-hook="page-gradient-class-name"]').style
      .height,
  getPageHtml: () => element.innerHTML,
});
