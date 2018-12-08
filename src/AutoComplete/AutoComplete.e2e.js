import eyes from 'eyes.it';
import { waitForVisibilityOf } from 'wix-ui-test-utils/protractor';
import { getStoryUrl } from '../../test/utils/storybook-helpers';
import { autoCompleteTestkitFactory } from '../../testkit/protractor';
import eventually from 'wix-eventually';

describe('AutoComplete', () => {
  const storyUrl = getStoryUrl('4. Selection', '4.1 + AutoComplete');
  const dataHook = 'story-autocomplete';

  eyes.it('should open autocomplete when it focused', async () => {
    const driver = autoCompleteTestkitFactory({ dataHook });

    await browser.get(storyUrl);

    await waitForVisibilityOf(driver.element(), 'Cannot find AutoComplete');

    expect(await driver.getDropdown().isDisplayed()).toBe(false);

    await driver.click();

    await eventually(async () => {
      expect(await driver.getDropdown().isDisplayed()).toBe(true);
    });
    expect(await driver.getDropdownItemsCount()).toEqual(5);

    await driver.getInput().sendKeys('first');
    expect(await driver.getDropdownItemsCount()).toEqual(1);

    expect(await driver.getDropdownItem(0)).toBe('First option');
  });

  eyes.it('should choose one of autocomplete items', async () => {
    const driver = autoCompleteTestkitFactory({ dataHook });

    await browser.get(storyUrl);

    await waitForVisibilityOf(driver.element(), 'Cannot find AutoComplete');
    await driver.click();
    await driver.getDropdownItem(2).click();

    expect(await driver.getInput().getAttribute('value')).toBe('Third option');
  });
});
