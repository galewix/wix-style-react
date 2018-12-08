import eyes from 'eyes.it';
import { statsWidgetTestkitFactory } from '../../testkit/protractor';
import { waitForVisibilityOf } from 'wix-ui-test-utils/protractor';
import { getStoryUrl } from '../../test/utils/storybook-helpers';

describe('StatsWidget', () => {
  const storyUrl = getStoryUrl('2. Layout', '2.7 StatsWidget');
  const dataHook = 'standard-stats-widget';

  eyes.it('should show proper amount of statistics', () => {
    const driver = statsWidgetTestkitFactory({ dataHook });

    browser.get(storyUrl);

    waitForVisibilityOf(driver.element(), 'Cannot find StatsWidget').then(
      () => {
        expect(driver.numberOfStatistics()).toBe(3);
      },
    );
  });
});
