import eyes from 'eyes.it';
import {
  scrollToElement,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';

import { createStoryUrl } from '../../test/utils/storybook-helpers';
import {
  buttonTestkitFactory,
  genericModalLayoutTestkitFactory,
} from '../../testkit/protractor';

const byDataHook = dataHook => $(`[data-hook="${dataHook}"]`);

async function verifyItem(dataHook) {
  const element = byDataHook(dataHook);
  await waitForVisibilityOf(element, `Cannot find ${dataHook}`);
  await scrollToElement(element);
  await eyes.checkWindow(dataHook);
}

describe('GenericModalLayout', () => {
  describe('default', () => {
    eyes.it('should open generic modal layout in modal', async () => {
      const storyUrl = createStoryUrl({
        kind: 'Components',
        story: 'GenericModalLayout',
      });
      await browser.get(storyUrl);

      const button = buttonTestkitFactory({
        dataHook: 'open-default-generic-modal-layout-in-modal-button',
      });

      await button.click();
      await verifyItem('default-generic-modal-layout');

      const driver = genericModalLayoutTestkitFactory({
        dataHook: 'default-generic-modal-layout',
      });

      expect(await driver.isFullscreen()).toBeFalsy();
    });
  });

  describe('fullscreen', () => {
    eyes.it(
      'should open fullscreen generic modal layout in modal',
      async () => {
        const storyUrl = createStoryUrl({
          kind: 'Components',
          story: 'GenericModalLayout',
        });
        await browser.get(storyUrl);

        const button = buttonTestkitFactory({
          dataHook: 'open-fullscreen-generic-modal-layout-in-modal-button',
        });

        await button.click();
        await verifyItem('fullscreen-generic-modal-layout');

        const driver = genericModalLayoutTestkitFactory({
          dataHook: 'fullscreen-generic-modal-layout',
        });

        expect(await driver.isFullscreen()).toBeTruthy();
      },
    );
  });
});
