import inputDriverFactory from '../Input/Input.driver';
import dropdownLayoutDriverFactory from '../DropdownLayout/DropdownLayout.driver';
import deprecationLog from '../utils/deprecationLog';

const inputWithOptionsDriverFactory = ({ element, wrapper }) => {
  const inputWrapper = element && element.childNodes[0];
  const inputDriver =
    element &&
    inputDriverFactory({
      element: inputWrapper.childNodes[0],
      wrapper: inputWrapper,
    });
  const dropdownLayoutDriver =
    element &&
    dropdownLayoutDriverFactory({
      element: element.childNodes[1].childNodes[0],
      wrapper,
    });

  const createDeprecationMessageForKeyMethod = methodName =>
    deprecationLog(
      `InputWithOptions testkit method "${methodName}" is deprecated. Use "pressKey" with the appropriate key mame instead.`,
    );

  const driver = {
    exists: () => !!element,
    isReadOnly: () =>
      inputDriver.getReadOnly() && inputWrapper.className.includes('readonly'),
    inputWrapper: () => inputWrapper,
    focus: () => inputDriver.focus(),
    blur: () => dropdownLayoutDriver.mouseClickOutside(),
    pressKey: key => inputDriver.keyDown(key),
    outsideClick: () =>
      document.body.dispatchEvent(new Event('mouseup', { cancelable: true })),
    isOptionWrappedToHighlighter: optionId => {
      const { element } = dropdownLayoutDriver.optionById(optionId);
      return !!element().querySelector(`[data-hook=highlighter-${optionId}]`);
    },

    // Deprecated key press methods
    pressDownKey: () => {
      createDeprecationMessageForKeyMethod('pressDownKey');
      inputDriver.keyDown('ArrowDown');
    },
    pressUpKey: () => {
      createDeprecationMessageForKeyMethod('pressUpKey');
      inputDriver.keyDown('ArrowUp');
    },
    pressAnyKey: () => {
      createDeprecationMessageForKeyMethod('pressAnyKey');
      inputDriver.keyDown('Any');
    },
    pressEnterKey: () => {
      createDeprecationMessageForKeyMethod('pressEnterKey');
      inputDriver.keyDown('Enter');
    },
    pressSpaceKey: () => {
      createDeprecationMessageForKeyMethod('pressSpaceKey');
      inputDriver.keyDown(' ');
    },
    pressTabKey: () => {
      createDeprecationMessageForKeyMethod('pressTabKey');
      inputDriver.keyDown('Tab');
    },
    pressEscKey: () => {
      createDeprecationMessageForKeyMethod('pressEscKey');
      inputDriver.keyDown('Escape');
    },
  };

  return {
    exists: () => driver.exists(),
    driver,
    inputDriver,
    dropdownLayoutDriver,
  };
};

export default inputWithOptionsDriverFactory;
