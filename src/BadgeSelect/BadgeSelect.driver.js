import dropdownLayoutDriverFactory from '../DropdownLayout/DropdownLayout.driver';

const badgeSelectDriverFactory = ({ element, wrapper }) => {
  const dropdownLayout = element.querySelector(
    '[data-hook=badgeSelect-dropdownLayout]',
  );
  const dropdownLayoutDriver = dropdownLayoutDriverFactory({
    element: dropdownLayout,
    wrapper,
  });

  const driver = {
    /** Returns 'true' wether the element exists */
    exists: () => !!element,
    /** Click on an option */
    clickAtOption: index => dropdownLayoutDriver.clickAtOption(index),
  };

  return driver;
};

export default badgeSelectDriverFactory;
