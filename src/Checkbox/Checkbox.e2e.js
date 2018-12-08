import eyes from 'eyes.it';
import { checkboxTestkitFactory } from '../../testkit/protractor';
import { waitForVisibilityOf } from 'wix-ui-test-utils/protractor';
import { getStoryUrl } from '../../test/utils/storybook-helpers';
import autoExampleDriver from 'wix-storybook-utils/AutoExampleDriver';
import { runFocusTests } from '../common/Focusable/FocusableTestsE2E';

const NO_DESCRIPTION = '';

describe('Checkbox', () => {
  const storyUrl = getStoryUrl('4. Selection', '4.2 Checkbox');
  const checkboxDriver = checkboxTestkitFactory({
    dataHook: 'storybook-checkbox',
  });

  describe(NO_DESCRIPTION, () => {
    const waitForCheckbox = () =>
      waitForVisibilityOf(checkboxDriver.element(), 'Cannot find Checkbox');
    const clickTab = () =>
      browser
        .actions()
        .sendKeys(protractor.Key.TAB)
        .perform();

    beforeEach(async () => {
      // TODO: We do browser.get() before EACH test in order to reset the focus.
      // implmement a generic solution in AutoExampleDriver that will do
      // propper reset of the focus, so we don't have to get the page,
      // and thus the test will run faster.
      await browser.get(storyUrl);

      // No need for reset as long as we do browser.get() before each test.
      // await autoExampleDriver.reset();
      await waitForCheckbox();
    });

    eyes.it('should have default props', async () => {
      expect(await checkboxDriver.hasError()).toBe(false, 'hasError');
      expect(await checkboxDriver.isChecked()).toBe(false, 'isChecked');
      expect(await checkboxDriver.isFocused()).toBe(false, 'isFocused');
      expect(await checkboxDriver.isDisabled()).toBe(false, 'isDisabled');
    });

    eyes.it('should set checked state when clicked', async () => {
      expect(await checkboxDriver.isChecked()).toBe(false);
      await checkboxDriver.click();
      expect(await checkboxDriver.isChecked()).toBe(true);
    });

    eyes.it('should show focused styles', async () => {
      expect(await checkboxDriver.isFocused()).toBe(false);
      await clickTab();
      expect(await checkboxDriver.isFocused()).toBe(true);
    });

    describe('has error', () => {
      beforeEach(async () => {
        await autoExampleDriver.setProps({ hasError: true });
      });

      eyes.it('should show error styles', async () => {
        expect(await checkboxDriver.hasError()).toBe(true);
      });

      eyes.it('should show focused styles', async () => {
        expect(await checkboxDriver.hasError()).toBe(true);
        expect(await checkboxDriver.isFocused()).toBe(false);
        await clickTab();
        expect(await checkboxDriver.isFocused()).toBe(true);
      });
    });

    describe('is disabled', () => {
      beforeEach(async () => {
        await autoExampleDriver.setProps({ disabled: true });
      });

      eyes.it('should be disabled', async () => {
        expect(await checkboxDriver.isDisabled()).toBe(true);
      });

      eyes.it('should not be focusable', async () => {
        expect(await checkboxDriver.isDisabled()).toBe(true);
        expect(await checkboxDriver.isFocused()).toBe(false);
        await clickTab();
        expect(await checkboxDriver.isFocused()).toBe(false);
      });
    });
  });

  describe('Generic', () => {
    runFocusTests(checkboxDriver, storyUrl);
  });
});
