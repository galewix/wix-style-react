import dropdownLayoutDriverFactory from '../DropdownLayout/DropdownLayout.driver';
import {badgeDriverFactory} from 'wix-ui-backoffice/dist/src/components/Badge/Badge.driver';
import badgeSelectPublicDriverFactory from './BadgeSelect.driver';

const badgeSelectDriverFactory = ({element, wrapper, eventTrigger}) => {
  const badgeWrapper = element.querySelector('[data-hook=badgeSelect-badge-wrapper]');
  const dropdownLayout = element.querySelector('[data-hook=badgeSelect-dropdownLayout]');
  const badgeDriver = badgeDriverFactory({element: badgeWrapper.childNodes[0], wrapper: badgeWrapper, eventTrigger});
  const dropdownLayoutDriver = dropdownLayoutDriverFactory({element: dropdownLayout, wrapper});

  const driver = {
    ...badgeSelectPublicDriverFactory({element, wrapper, eventTrigger}),

    /** Clicks on the badge */
    click: () => badgeDriver.click(),
    /** Performs a click outside the component */
    clickOutside: () => dropdownLayoutDriver.mouseClickOutside(),
    /** Whether the dropdown is shown */
    isDropdownShown: () => dropdownLayoutDriver.isShown()
  };

  return {
    driver,
    badgeDriver
  };
};

export default badgeSelectDriverFactory;
