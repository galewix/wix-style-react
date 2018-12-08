import eyes from 'eyes.it';

import { waitForVisibilityOf } from 'wix-ui-test-utils/protractor';
import { pageHeaderTestkitFactory } from '../../testkit/protractor';
import { createTestStoryUrl } from '../../test/utils/storybook-helpers';

import { storySettings } from '../../stories/PageHeader/storySettings';

describe('PageHeader', () => {
  const testStoryUrl = testName =>
    createTestStoryUrl({ ...storySettings, testName });

  const dataHook = 'story-page-header';

  const initTest = async testName => {
    await browser.get(testStoryUrl(testName));
    const driver = pageHeaderTestkitFactory({ dataHook });
    await waitForVisibilityOf(driver.element(), 'Cannot find PageHeader');
    return driver;
  };

  describe('Long title', () => {
    eyes.it('should disaply multiline title and subtitle', async () => {
      await initTest('1. Long Title and Subtitle');
    });
  });
});
