import eyes from 'eyes.it';
import { searchTestkitFactory } from '../../testkit/protractor';
import { waitForVisibilityOf } from 'wix-ui-test-utils/protractor';
import { getStoryUrl } from '../../test/utils/storybook-helpers';
import autoExampleDriver from 'wix-storybook-utils/AutoExampleDriver';

describe('Search', () => {
  const storyUrl = getStoryUrl('3. Inputs', '3.9 Search');
  const driver = searchTestkitFactory({ dataHook: 'storybook-search' });

  beforeAll(() => {
    browser.get(storyUrl);
  });

  beforeEach(done => {
    waitForVisibilityOf(driver.element(), 'Can not find Search').then(done);
  });

  afterEach(() => {
    autoExampleDriver.reset();
  });

  eyes.it('should filter search options by input', () => {
    expect(driver.getSearchDropdown().isDisplayed()).toBe(false);
    driver.clickOnInput();
    driver.enterText('fox');
    expect(driver.getSearchDropdown().isDisplayed()).toBe(true);
    expect(driver.getSearchOptionsCount()).toBe(1);
    expect(driver.getSearchOptionAt(0)).toBe('fox');
  });

  eyes.it('should choose one of search options', () => {
    driver.clickOnInput();
    driver.enterText('the');
    driver.clickSearchOptionAt(0);
    expect(driver.getText()).toBe('The quick');
  });

  eyes.it(
    'should clear input and show all search options after clear button click',
    () => {
      driver.clickOnInput();
      driver.enterText('fox');
      expect(driver.hasClearButton()).toBe(true);
      driver.clickClear();
      expect(driver.getSearchDropdown().isDisplayed()).toBe(false);
      expect(driver.getText()).toBe('');
    },
  );
});
