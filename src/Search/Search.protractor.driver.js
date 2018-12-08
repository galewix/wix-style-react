import inputDriverFactory from '../Input/Input.protractor.driver';
import dropdownDriverFactory from '../Dropdown/Dropdown.protractor.driver';

export default component => {
  const inputDriver = inputDriverFactory(component);
  const dropdownDriver = dropdownDriverFactory(component);

  return {
    ...inputDriver,
    element: () => component,
    exists: () => component.isPresent(),
    clickOnInput: () => dropdownDriver.getInput().click(),
    getInput: dropdownDriver.getInput,
    getSearchDropdown: dropdownDriver.getDropdown,
    getSearchOptionAt: dropdownDriver.getDropdownItem,
    clickSearchOptionAt: index => dropdownDriver.getDropdownItem(index).click(),
    getSearchOptionsCount: dropdownDriver.getDropdownItemsCount,
  };
};
