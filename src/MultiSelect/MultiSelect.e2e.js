import { protractor } from 'protractor';
import queryString from 'query-string';
import autoExampleDriver from 'wix-storybook-utils/AutoExampleDriver';
import { eyesItInstance } from '../../test/utils/eyes-it';
import { multiSelectTestkitFactory } from '../../testkit/protractor';
import { waitForVisibilityOf, mouseEnter } from 'wix-ui-test-utils/protractor';
import {
  getStoryUrl,
  createStoryUrl,
} from '../../test/utils/storybook-helpers';

import { storySettings } from '../../stories/MultiSelect/storySettings';

describe('MultiSelect', () => {
  describe('AutoExample', () => {
    const eyes = eyesItInstance({
      enableSnapshotAtBrowserGet: false,
    });

    const driver = multiSelectTestkitFactory({
      dataHook: storySettings.dataHook,
    });

    const baseUrl = createStoryUrl({
      kind: storySettings.category,
      story: storySettings.storyName,
      withExamples: false,
    });

    function runTests() {
      eyes.it('should show 2 tags one with thumb', async () => {
        await driver.click();
        await driver.selectItemById('Alabama');
        await driver.selectItemById('Arizona');
      });
    }

    afterEach(() => {
      return autoExampleDriver.remount();
    });

    describe('LTR', () => {
      beforeAll(async () => {
        await browser.get(baseUrl);
        const element = driver.element();
        await waitForVisibilityOf(element, 'Cannot find <MultiSelect/>');
      });

      runTests();
    });

    describe('RTL', () => {
      beforeAll(async () => {
        await browser.get(`${baseUrl}&${queryString.stringify({ rtl: true })}`);
        const element = driver.element();
        await waitForVisibilityOf(element, 'Cannot find <MultiSelect/>');
      });

      runTests();
    });
  });

  describe('Examples', () => {
    const storyUrl = getStoryUrl('3. Inputs', '3.8 Tags');

    const eyes = eyesItInstance({
      enableSnapshotAtBrowserGet: false,
      enableSnapshotAtEnd: false,
    });

    beforeEach(async () => {
      await browser.get(storyUrl);
    });

    eyes.it(
      'should show focus style + hover (focused by keyboard)',
      async () => {
        const driver = multiSelectTestkitFactory({
          dataHook: 'multi-select-standard',
        });
        const element = driver.element();
        await waitForVisibilityOf(element, 'Cannot find <MultiSelect/>');
        await browser
          .actions()
          .sendKeys(protractor.Key.TAB)
          .perform();
        await browser
          .actions()
          .sendKeys(protractor.Key.TAB)
          .perform();
        await eyes.checkWindow('focused by keyboard (not hovered)');
        await mouseEnter(element);
        await eyes.checkWindow('focused and hovered');
      },
    );

    eyes.it('should show hover style (Standard)', async () => {
      const driver = multiSelectTestkitFactory({
        dataHook: 'multi-select-standard',
      });
      const element = driver.element();
      await waitForVisibilityOf(element, 'Cannot find <MultiSelect/>');
      await mouseEnter(element);
      await eyes.checkWindow('hover only');
      await driver.addTag();
      await mouseEnter(element);
      await eyes.checkWindow('hovered with tag');
    });

    eyes.it('should show hover style (when Reorderable)', async () => {
      const driver = multiSelectTestkitFactory({
        dataHook: 'multi-select-reorderable',
      });
      const element = driver.element();
      await waitForVisibilityOf(element, 'Cannot find <MultiSelect/>');
      await mouseEnter(element);
      await eyes.checkWindow('hover only');
      await driver.addTag();
      await mouseEnter(element);
      await eyes.checkWindow('hovered with tag');
    });

    eyes.it(
      'should break to new line when needed',
      async () => {
        const ELEMENT_HEIGHT_MULTILINE = 66;
        const driver = multiSelectTestkitFactory({
          dataHook: 'multi-select-limited',
        });
        await waitForVisibilityOf(
          driver.element(),
          'Cannot find <MultiSelect/>',
        );
        for (let i = 0; i < 9; i++) {
          await driver.addTag();
        }
        const height = await driver.getHeight();

        expect(height).toBe(ELEMENT_HEIGHT_MULTILINE);
        await eyes.checkWindow('end');
      },
      { version: '<Input/> - On text click - select all' },
    );
  });
});
