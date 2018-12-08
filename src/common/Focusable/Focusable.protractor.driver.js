import { INTERNAL_DRIVER_SYMBOL } from '../../../test/utils/private-drivers';
import {
  hasAttribute,
  isFocused,
} from '../../../test/utils/protractor-helpers';

const focusableDriverFactory = ({
  rootElement,
  clickableElements,
  nativeFocusableElement,
}) => {
  if (!rootElement || !clickableElements || !nativeFocusableElement) {
    throw new Error('focusableDriverFactory: Invalid aruments');
  }

  return {
    isFocused: () => isFocused(nativeFocusableElement),
    [INTERNAL_DRIVER_SYMBOL]: {
      rootElement,
      hasFocusState: () => hasAttribute(rootElement, 'data-focus'),
      hasFocusVisibleState: () =>
        hasAttribute(rootElement, 'data-focus-visible'),
      clickRoot: () => rootElement.click(),
      clickableElements,
    },
  };
};

export default focusableDriverFactory;
