import eyes from 'eyes.it';
import { waitForVisibilityOf } from 'wix-ui-test-utils/protractor';
import { getStoryUrl } from '../../../test/utils/storybook-helpers';

describe('Icons', () => {
  const storyUrl = getStoryUrl('1. Foundation', '1.4 Icons');
  eyes.it('should show all icons', async () => {
    browser.get(storyUrl);
    await waitForVisibilityOf(
      $('[data-hook="new-icons"]'),
      'Cannot find all icons',
    );
  });
});
