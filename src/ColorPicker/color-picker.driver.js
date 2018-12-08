import ReactTestUtils from 'react-dom/test-utils';

const colorPickerDriverFactory = ({ element }) => {
  return {
    exists: () => !!element,
    selectBlackColor: () => {
      // as with jsdom size of pallette 0 px, then click to 1,1 will make color black
      ReactTestUtils.Simulate.mouseDown(
        element.querySelector('[data-hook="color-picker-hsb"]'),
        {
          clientX: 1,
          clientY: 1,
        },
      );
    },
    confirm: () =>
      ReactTestUtils.Simulate.click(
        element.querySelector('[data-hook="color-picker-confirm-button"]'),
      ),
    clickOnPreviousColor: () =>
      ReactTestUtils.Simulate.click(
        element.querySelector('[data-hook="color-picker-history-previous"]'),
      ),
    historyPanelExists: () =>
      !!element.querySelector('[data-hook="color-picker-history"]'),
    historyCurrentColor: () =>
      element.querySelector('[data-hook="color-picker-history-current"]').style
        .background,
    historyPreviousColor: () =>
      element.querySelector('[data-hook="color-picker-history-previous"]').style
        .background,
  };
};

export default colorPickerDriverFactory;
