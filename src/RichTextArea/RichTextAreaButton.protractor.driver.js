import focusableDriverFactory from '../common/Focusable/Focusable.protractor.driver';
import { mergeDrivers } from '../../test/utils/private-drivers';

const buttonDriverFactory = element => {
  const focusableDriver = focusableDriverFactory({
    rootElement: element,
    nativeFocusableElement: element,
    clickableElements: [element, element],
  });

  const publicDriver = {
    // Empty driver
  };

  return mergeDrivers(publicDriver, focusableDriver);
};

export default buttonDriverFactory;
