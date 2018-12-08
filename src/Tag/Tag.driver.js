import ReactTestUtils from 'react-dom/test-utils';
import { isClassExists } from '../../test/utils';

import { testkitFactoryCreator } from 'wix-ui-test-utils/vanilla';
import buttonDriverFactory from '../Backoffice/Button/Button.driver';
import { dataHooks } from './Tag.helpers';

const buttonTestkitFactory = testkitFactoryCreator(buttonDriverFactory);

const getThumb = element => element.querySelector('span');

const getRemoveButtonDriver = element => {
  return buttonTestkitFactory({
    wrapper: element,
    dataHook: dataHooks.removeButton,
  });
};

const tagDriverFactory = ({ element }) => {
  return {
    exists: () => !!element,
    isTiny: () => isClassExists(element, 'tinySize'),
    isSmall: () => isClassExists(element, 'smallSize'),
    isMedium: () => isClassExists(element, 'mediumSize'),
    isLarge: () => isClassExists(element, 'largeSize'),
    isStandardTheme: () => isClassExists(element, 'standardTheme'),
    isWarningTheme: () => isClassExists(element, 'warningTheme'),
    isErrorTheme: () => isClassExists(element, 'errorTheme'),
    isRemovable: () => getRemoveButtonDriver(element).exists(),
    removeTag: () => getRemoveButtonDriver(element).click(),
    click: () => ReactTestUtils.Simulate.click(element),
    isThumbExists: () => isClassExists(getThumb(element), 'thumb'),
    isDisabled: () => isClassExists(element, 'disabled'),
    getLabel: () => element.textContent,
  };
};

export default tagDriverFactory;
