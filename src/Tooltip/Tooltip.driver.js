import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import ReactDOM from 'react-dom';
import eventually from 'wix-eventually';
import last from 'lodash/last';

import Tooltip from './Tooltip';

const arrowDirectionToPlacement = {
  top: 'bottom',
  bottom: 'top',
  left: 'right',
  right: 'left',
};

const tooltipDriverFactory = ({ element, wrapper }) => {
  const bodyOrWrapper = {
    querySelector: query =>
      document.body.querySelector(query) ||
      (wrapper.querySelector && wrapper.querySelector(query)),
    querySelectorAll: query => {
      const documentResult = document.body.querySelectorAll(query);
      return documentResult.length > 0
        ? documentResult
        : wrapper.querySelectorAll && wrapper.querySelectorAll(query);
    },
  };
  const getTooltipContent = () => bodyOrWrapper.querySelector('.tooltip');
  const mouseEnter = () => ReactTestUtils.Simulate.mouseEnter(element);
  const mouseLeave = () => ReactTestUtils.Simulate.mouseLeave(element);
  const isShown = () => !!bodyOrWrapper.querySelector('.tooltip');
  const getContent = () => {
    let content = getTooltipContent();
    while (content.children.length > 0) {
      content = content.children[0];
    }
    return content.innerHTML;
  };

  return {
    isShown,
    focus: () => ReactTestUtils.Simulate.focus(element),
    blur: () => ReactTestUtils.Simulate.blur(element),
    click: () => ReactTestUtils.Simulate.click(element),
    mouseEnter,
    mouseLeave,
    hasErrorTheme: () => !!bodyOrWrapper.querySelector('.error'),
    hasDarkTheme: () => !!bodyOrWrapper.querySelector('.dark'),
    hasLightTheme: () => !!bodyOrWrapper.querySelector('.light'),
    hasAnimationClass: () => !!bodyOrWrapper.querySelector('.fadeIn'),
    hasArrow: () =>
      !!bodyOrWrapper.querySelector('[data-hook="tooltip-arrow"]'),
    getTooltipWrapper: getTooltipContent,
    getChildren: () => element.innerHTML,
    getPlacement: () => {
      const arrowDirection = last(
        bodyOrWrapper.querySelectorAll('[data-hook="tooltip-arrow"]'),
      ).className.split(' ')[2];
      return arrowDirectionToPlacement[arrowDirection];
    },
    getContent,
    hoverAndGetContent: ({ timeout = 1000, interval = 50 } = {}) => {
      mouseEnter();
      return eventually(
        () => {
          if (!isShown()) {
            throw 'Tooltip not visible';
          }
          const content = getContent();
          mouseLeave();
          return content;
        },
        {
          timeout,
          interval,
        },
      );
    },
    getMaxWidth: () => {
      const content = getTooltipContent();
      const values = content.style._values;
      return values['max-width'];
    },
    getMinWidth: () => {
      const content = getTooltipContent();
      const values = content.style._values;
      return values['min-width'];
    },
    getAlignment: () => {
      const content = getTooltipContent();
      const values = content.style._values;
      return values['text-align'];
    },
    getPadding: () => {
      const content = getTooltipContent();
      const values = content.style._values;
      return values.padding;
    },
    setProps: props => {
      ReactDOM.render(
        <div ref={r => (element = r)}>
          <Tooltip {...props} />
        </div>,
        wrapper,
      );
    },
  };
};

export default tooltipDriverFactory;
