import {isClassExists} from '../../test/utils';

const titleElement = element => element.querySelector('[data-hook="page-header-title"] h1');
const subtitleElement = element => element.querySelector('[data-hook="page-header-subtitle"] span');
const breadcrumbsElement = element => element.querySelector('[data-hook="page-header-breadcrumbs"]');
const actionBarElement = element => element.querySelector('[data-hook="page-header-actionbar"]');
const backButtonElement = element => element.querySelector('[data-hook="page-header-backbutton"]');

export default ({element}) => ({
  hasClass: className => isClassExists(element, className),
  titleText: () => titleElement(element).textContent,
  isTitleExists: () => !!titleElement(element),
  subtitleText: () => subtitleElement(element).textContent,
  isSubtitleExists: () => !!subtitleElement(element),
  isBreadcrumbsExists: () => !!breadcrumbsElement(element),
  breadcrumbsText: () => breadcrumbsElement(element).textContent,
  isActionBarExists: () => !!actionBarElement(element),
  isBackButtonExists: () => !!backButtonElement(element)
});
