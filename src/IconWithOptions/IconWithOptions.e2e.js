import eyes from 'eyes.it';
import { iconWithOptionsTestkitFactory } from '../../testkit/protractor';
import { waitForVisibilityOf } from 'wix-ui-test-utils/protractor';
import { getStoryUrl } from '../../test/utils/storybook-helpers';

describe('IconWithOptions', () => {
  const storyUrl = getStoryUrl('4. Selection', '4.1 + IconWithOptions');
  const dataHook = 'story-iconWithOptions';

  eyes.it(
    'should hide dropdown when selecting an option which is not already selected',
    () => {
      browser.get(storyUrl);
      const driver = iconWithOptionsTestkitFactory({ dataHook });

      waitForVisibilityOf(driver.element(), 'Cannot find iconWithOptions').then(
        () => {
          driver.mouseEnter();
          driver.getDropdownItem(1).click();

          driver.mouseLeave();
          driver.mouseEnter();
          driver.getDropdownItem(1).click();
          expect(driver.getDropdown().isDisplayed()).toBe(true);
        },
      );
    },
  );
});
