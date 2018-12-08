import ReactTestUtils from 'react-dom/test-utils';

const sliderDriverFactory = ({ element }) => {
  const $sliderHandles = () => element.querySelectorAll('.slider-handle');
  const $sliderDots = () => element.querySelectorAll('.rc-slider-dot');

  return {
    exists: () => !!element,
    isDotSelected: number =>
      $sliderDots()
        .item(number - 1)
        .classList.contains('rc-slider-dot-active'),
    numOfSliderDots: () => $sliderDots().length,
    numOfSliderHandles: () => $sliderHandles().length,
    getToolTipValue: () => {
      const tooltip = element.querySelector('.slider-tooltip');
      return tooltip && tooltip.innerHTML;
    },
    hoverHandle: ({ handleIndex }) => {
      const handle = $sliderHandles()[handleIndex];
      ReactTestUtils.Simulate.mouseEnter(handle);
    },
    unHoverHandle: ({ handleIndex }) => {
      const handle = $sliderHandles()[handleIndex];
      ReactTestUtils.Simulate.mouseLeave(handle);
    },
  };
};

export default sliderDriverFactory;
