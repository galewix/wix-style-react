import { findByHook, resolveIn, isClassExists } from '../../test/utils';
import tooltipDriverFactory from '../Tooltip/Tooltip.driver';

const getTextElement = element =>
  element.querySelector(`[data-hook="loader-text"]`);

const loaderDriverFactory = ({ element }) => {
  return {
    component: () => element,
    exists: () => !!element,
    getColor: () => (isClassExists(element, 'blue') ? 'blue' : 'white'),
    getText: () => getTextElement(element).textContent,
    hasText: () => !!getTextElement(element),
    isLarge: () => isClassExists(element, 'large'),
    isMedium: () => isClassExists(element, 'medium'),
    isSmall: () => isClassExists(element, 'small'),
    isTiny: () => isClassExists(element, 'tiny'),
    isLoading: () => isClassExists(element, 'loading'),
    isError: () => isClassExists(element, 'error'),
    isSuccess: () => isClassExists(element, 'success'),
    getStatusMessage: () => {
      const tooltipDriver = tooltipDriverFactory({
        element: findByHook(element, 'loader-tooltip'),
      });

      tooltipDriver.mouseEnter();
      return resolveIn(500).then(() => tooltipDriver.getContent());
    },
  };
};

export default loaderDriverFactory;
