import eyes from 'eyes.it';
import {
  formFieldTestkitFactory,
  inputTestkitFactory,
} from '../../testkit/protractor';
import {
  waitForVisibilityOf,
  scrollToElement,
} from 'wix-ui-test-utils/protractor';
import { createStoryUrl } from '../../test/utils/storybook-helpers';
import autoExampleDriver from 'wix-storybook-utils/AutoExampleDriver';

const storyUrl = createStoryUrl({
  kind: 'Components',
  story: 'FormField',
  withExamples: false,
});
const storyUrlWithExamples = createStoryUrl({
  kind: 'Components',
  story: 'FormField',
  withExamples: true,
});
const driver = formFieldTestkitFactory({ dataHook: 'storybook-formfield' });

describe('FormField', () => {
  describe('[AutoExample]', () => {
    beforeAll(() => browser.get(storyUrl));

    eyes.it(
      'should render with label',
      async () => {
        await autoExampleDriver.setProps({ label: 'hello' });
        await waitForVisibilityOf(
          driver.element(),
          'Cannot find FormField component',
        );
        expect(await driver.getLabel().getText()).toMatch('hello');
      },
      { version: 'no maxlength' },
    );

    eyes.it(
      'should render as required given required and no label props',
      async () => {
        await autoExampleDriver.setProps({ required: true });
        await waitForVisibilityOf(
          driver.element(),
          'Cannot find FormField component',
        );
        expect(await driver.isRequired()).toBe(true);
      },
    );

    eyes.it('should render info icon given infoContent prop', async () => {
      await autoExampleDriver.setProps({ infoContent: 'hello' });
      await waitForVisibilityOf(
        driver.element(),
        'Cannot find FormField component',
      );
      expect(await driver.isInfoIconVisible()).toBe(true);
    });

    eyes.it('should render info icon given infoContent prop', async () => {
      await autoExampleDriver.setProps({ infoContent: 'hello' });
      await waitForVisibilityOf(
        driver.element(),
        'Cannot find FormField component',
      );
      expect(await driver.isInfoIconVisible()).toBe(true);
    });
  });

  eyes.it('should render length count', async () => {
    await browser.get(storyUrlWithExamples);
    const formFieldDriver = formFieldTestkitFactory({
      dataHook: 'storybook-formfield-length-count',
    });
    const element = formFieldDriver.element();
    const inputDriver = inputTestkitFactory({
      dataHook: 'storybook-formfield-length-count-input',
    });
    await waitForVisibilityOf(element, 'Cannot find FormField component');
    await scrollToElement(element);
    await eyes.checkWindow('count is zero');
    await inputDriver.enterText('11111-11111');
    await inputDriver.enterText('11111-11111-11111-11111');
  });
});
