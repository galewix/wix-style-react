import eyes from 'eyes.it';
import { tpaInputTestkitFactory } from '../../../testkit/protractor';
import { waitForVisibilityOf } from 'wix-ui-test-utils/protractor';
import { getStoryUrl } from '../../../test/utils/storybook-helpers';

describe('TPA Input', () => {
  const storyUrl = getStoryUrl('TPA', 'Input');

  eyes.it('should enter value to Input', () => {
    const dataHook = 'story-input';
    const driver = tpaInputTestkitFactory({ dataHook });

    browser.get(storyUrl);

    waitForVisibilityOf(driver.element(), 'Cannot find Input').then(() => {
      driver.enterText('123');
      expect(driver.getText()).toBe('123');
    });
  });
});
