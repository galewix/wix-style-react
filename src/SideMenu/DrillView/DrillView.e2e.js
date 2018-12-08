import eyes from 'eyes.it';
import { drillViewTestkitFactory } from '../../../testkit/protractor';
import { waitForVisibilityOf } from 'wix-ui-test-utils/protractor';
import { getStoryUrl } from '../../../test/utils/storybook-helpers';

describe('DrillView', () => {
  const storyUrl = getStoryUrl('6. Navigation', '6.1 SideMenuDrill');

  eyes.it('should clear transition classes', async () => {
    const dataHook = 'side-menu';
    const driver = drillViewTestkitFactory({ dataHook });

    await browser.get(storyUrl);
    await waitForVisibilityOf(driver.element(), 'Cannot find DrillView');

    await driver.clickSubMenu(1);
    await waitForVisibilityOf(driver.getBackLink(), 'Cannot find BackLink');

    await driver.clickBackLink();
    await browser.wait(async () => await driver.hasSingleDrillViewPanel());
    await browser.wait(
      async () => await driver.hasNoTransitionClassesInDrillView(),
    );
  });

  eyes.it('should show arrow on hover', async () => {
    const dataHook = 'side-menu';
    const driver = drillViewTestkitFactory({ dataHook });

    await browser.get(storyUrl);
    await waitForVisibilityOf(driver.element(), 'Cannot find DrillView');
    await driver.hoverSubMenu(4);
  });
});
