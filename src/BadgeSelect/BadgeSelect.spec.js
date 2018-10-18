import React from 'react';
import {createDriverFactory} from 'wix-ui-test-utils/driver-factory';
import badgeSelectPrivateDriverFactory from './BadgeSelect.driver.private';
import BadgeSelect from './BadgeSelect';
import {SKIN, SIZE, TYPE} from 'wix-ui-backoffice/dist/src/components/Badge/constants';

describe('BadgeSelect', () => {
  const createDriver = createDriverFactory(badgeSelectPrivateDriverFactory);
  const initialOptionId = 0;
  const options = Object.values(SKIN).map((skin, id) => ({
    id: id.toString(),
    skin,
    text: skin
  }));

  function createComponent(props = {}) {
    return createDriver(
      <BadgeSelect
        options={options}
        selectedId={initialOptionId.toString()}
        onSelect={() => {}}
        {...props}
        />
    );
  }

  it('should have a badge and hidden options by default', () => {
    const {driver, badgeDriver} = createComponent();
    expect(driver.exists()).toBeTruthy();
    expect(driver.isDropdownShown()).toBeFalsy();
    expect(badgeDriver.exists()).toBeTruthy();
  });

  it('should show badge with initial selected skin and text', () => {
    const {badgeDriver} = createComponent();
    expect(badgeDriver.getSkin()).toBe(options[initialOptionId].skin);
    expect(badgeDriver.text()).toBe(options[initialOptionId].text);
  });

  it('should show badge with correct general props as default', () => {
    const {badgeDriver} = createComponent();
    expect(badgeDriver.getType()).toBe(TYPE.solid);
    expect(badgeDriver.getSize()).toBe(SIZE.medium);
    expect(badgeDriver.isUppercase()).toBe(true);
  });

  it('should render badge with a suffix icon', () => {
    const {badgeDriver} = createComponent();
    expect(badgeDriver.getSuffixIcon()).toBe.defined;
  });

  it('should show badge with props given', () => {
    const {badgeDriver} = createComponent({type: TYPE.outlined, size: SIZE.small, uppercase: false});
    expect(badgeDriver.getType()).toBe(TYPE.outlined);
    expect(badgeDriver.getSize()).toBe(SIZE.small);
    expect(badgeDriver.isUppercase()).toBe(false);
  });

  it('should show badge selector when badge is clicked', () => {
    const {driver} = createComponent();
    driver.click();
    expect(driver.isDropdownShown()).toBeTruthy();
  });

  it('should hide options on selection', () => {
    const {driver} = createComponent();
    driver.click();
    driver.clickAtOption(2);
    expect(driver.isDropdownShown()).toBeFalsy();
  });

  it('should hide options on outside click', () => {
    const {driver} = createComponent();
    driver.click();
    expect(driver.isDropdownShown()).toBeTruthy();
    driver.clickOutside();
    expect(driver.isDropdownShown()).toBeFalsy();
  });

  it('should call onSelect when an option is selected', () => {
    const onSelect = jest.fn();
    const selectedIndex = 3;
    const {driver} = createComponent({onSelect});
    driver.click();
    driver.clickAtOption(selectedIndex);
    expect(onSelect).toBeCalledWith(options[selectedIndex]);
  });

  it('should change badge skin after an option is selected', () => {
    const {driver, badgeDriver} = createComponent();
    const selectedIndex = 3;

    driver.click();
    driver.clickAtOption(selectedIndex);
    expect(badgeDriver.getSkin()).toBe(options[selectedIndex].skin);
  });

  it('should change badge text after an option is selected', () => {
    const {driver, badgeDriver} = createComponent();
    const selectedIndex = 3;

    driver.click();
    driver.clickAtOption(selectedIndex);
    expect(badgeDriver.text()).toBe(options[selectedIndex].text);
  });
});
