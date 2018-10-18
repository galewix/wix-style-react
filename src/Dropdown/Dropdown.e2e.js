import eyes from 'eyes.it';
import autoExampleDriver from 'wix-storybook-utils/AutoExampleDriver';
import {dropdownTestkitFactory} from '../../testkit/protractor';
import {waitForVisibilityOf} from 'wix-ui-test-utils/protractor';
import {createStoryUrl} from '../../test/utils/storybook-helpers';
import {storySettings} from '../../stories/components/Dropdown/storySettings';

describe('Dropdown', () => {
  const autoExampleUrl = createStoryUrl({kind: storySettings.kind, story: storySettings.storyName, withExamples: false});

  eyes.it('should choose different dropdown items', async () => {
    const storyUrl = createStoryUrl({kind: storySettings.kind, story: storySettings.storyName});
    const dataHook = 'story-dropdown-controlled';
    const driver = dropdownTestkitFactory({dataHook});

    await browser.get(storyUrl);

    await waitForVisibilityOf(driver.element(), 'Cannot find Dropdown');
    expect(await driver.getInput().getAttribute('value')).toBe('');

    await driver.click();
    await driver.getDropdownItem(1).click();
    expect(await driver.getInput().getAttribute('value')).toBe('Option 2');

    await driver.click();
    await driver.getDropdownItem(2).click();
    expect(await driver.getInput().getAttribute('value')).toBe('Option 3');

        //choose a disabled option
    await driver.click();
    await driver.getDropdownItem(3).click();
    expect(await driver.getInput().getAttribute('value')).toBe('Option 3');
  });

  eyes.it('should display focused and with options shown', async () => {
    const dataHook = 'story-dropdown';
    await browser.get(autoExampleUrl);
    const driver = dropdownTestkitFactory({dataHook});
    await waitForVisibilityOf(driver.element(), 'Cannot find Dropdown');
    expect(await driver.isOptionsShown()).toBeFalsy();
    await driver.getInput().click();
    expect(await driver.isOptionsShown().isDisplayed()).toBeTruthy();
  });

  eyes.it('should display options with divider', async () => {
    const dataHook = 'story-dropdown';
    await browser.get(autoExampleUrl);
    await autoExampleDriver.setProps({options: [
      {id: 1, value: 'op 1'},
      {id: -99, value: '-'},
      {id: 2, value: 'op 2'}
    ]});
    const driver = dropdownTestkitFactory({dataHook});
    await waitForVisibilityOf(driver.element(), 'Cannot find Dropdown');
    expect(await driver.isOptionsShown()).toBeFalsy();
    await driver.getInput().click();
    expect(await driver.isOptionsShown().isDisplayed()).toBeTruthy();
  });
});
