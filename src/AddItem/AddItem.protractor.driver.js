import { mergeDrivers } from '../../test/utils/private-drivers';
import focusableDriverFactory from '../common/Focusable/Focusable.protractor.driver';

const addItemDriverFactory = element => {
  const focusableDriver = focusableDriverFactory({
    rootElement: element,
    nativeFocusableElement: element,
    clickableElements: [element],
  });
  const publicDriver = {
    click: () => element.click(),
    element: () => element,
  };
  return mergeDrivers(publicDriver, focusableDriver);
};

export default addItemDriverFactory;
