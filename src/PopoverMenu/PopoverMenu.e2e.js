import browserLogs from 'protractor-browser-logs';
import eyes from 'eyes.it';
import {
  POPOVER_MENU_DATA_HOOK,
  POPOVER_MENU_ITEM_DATA_HOOK,
} from '../../stories/Tooltip/Composite/PopoverMenuTemplate.helpers';

const EC = protractor.ExpectedConditions;

import { popoverMenuTestkitFactory } from '../../testkit/protractor';
import { waitForVisibilityOf } from 'wix-ui-test-utils/protractor';
import { getStoryUrl } from '../../test/utils/storybook-helpers';

describe('PopoverMenu', () => {
  const storyUrl = getStoryUrl('7. Tooltips', '7.3. Popover Menu');
  let driver;
  const logs = browserLogs(browser);

  beforeEach(async () => {
    logs.reset();
    logs.ignore(message => message.message.indexOf('Uncaught') === -1);

    driver = popoverMenuTestkitFactory({
      dataHook: POPOVER_MENU_DATA_HOOK,
    }).init.menuItemDataHook(POPOVER_MENU_ITEM_DATA_HOOK);
    await browser.get(storyUrl);
  });

  eyes.it('should show popover menu', async () => {
    await waitForVisibilityOf(
      driver.element(),
      'Can not find PopoverMenu trigger element',
    );
    await driver.click();

    waitForVisibilityOf(driver.menu.element(), 'Can not find PopoverMenu menu');
  });

  it('should hide popover menu on item click', async () => {
    await waitForVisibilityOf(driver.element());
    await driver.click();

    await waitForVisibilityOf(driver.menu.element());
    await driver.menu.clickItemAt(0);

    await browser.wait(
      EC.stalenessOf(driver.menu.element()),
      5000,
      'PopoverMenu has not been hidden after menu item click',
    );
  });

  describe('regression tests', () => {
    it('Uncaught TypeError: https://github.com/wix/wix-style-react/issues/2113', async () => {
      const storyUrl = getStoryUrl('Tests/7. Tooltip', '7.3. Popover Menu');
      await browser.get(storyUrl);

      driver = popoverMenuTestkitFactory({
        dataHook: 'popover-0',
      }).init.menuItemDataHook('popover-item-0');

      await waitForVisibilityOf(driver.element());

      await driver.click();

      await waitForVisibilityOf(driver.menu.element());

      await driver.menu.clickItemAt(0);

      await browser.wait(
        EC.stalenessOf(driver.menu.element()),
        5000,
        'PopoverMenu has not been hidden after menu item click',
      );

      await browser.wait(
        EC.stalenessOf(driver.element()),
        5000,
        'PopoverMenu has not been removed after menu item click',
      );

      logs.expect(
        /Uncaught TypeError: Cannot read property 'parentElement' of null/,
      );
      await logs
        .verify()
        .then(() => {
          fail('Expected error occurred');
        })
        .catch(e => {
          expect(e.message).toContain('NO MESSAGE TO EXPECT');
        });
    });
  });
});
