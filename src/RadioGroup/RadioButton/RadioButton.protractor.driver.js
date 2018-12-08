import focusableDriverFactory from '../../common/Focusable/Focusable.protractor.driver';
import { mergeDrivers } from '../../../test/utils/private-drivers';

const buttonDriverFactory = element => {
  const getRadio = () => element.$(`[data-hook="radiobutton-radio"]`);
  const getTextChildren = () => element.$(`[data-hook="radiobutton-children"]`);

  const focusableDriver = focusableDriverFactory({
    rootElement: element,
    nativeFocusableElement: element,
    clickableElements: [getRadio, getTextChildren],
  });

  const publicDriver = {
    // Empty driver
  };

  return mergeDrivers(publicDriver, focusableDriver);
};

export default buttonDriverFactory;
