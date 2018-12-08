import eyes from 'eyes.it';
import { waitForVisibilityOf } from 'wix-ui-test-utils/protractor';

import { calendarTestkitFactory } from '../../testkit/protractor';
import { getStoryUrl } from '../../test/utils/storybook-helpers';

describe('Calendar', () => {
  const dataHook = 'calendar';
  const storyUrl = getStoryUrl('3. Inputs', '3.13 Calendar');
  const driver = calendarTestkitFactory({ dataHook });

  beforeAll(async () => {
    await browser.get(storyUrl);
  });

  describe('default', () => {
    eyes.it('should not break design', async () => {
      await waitForVisibilityOf(driver.getElement(), 'Cannot find <Calendar/>');
      expect(await driver.exists()).toBe(true);
    });
  });
});
