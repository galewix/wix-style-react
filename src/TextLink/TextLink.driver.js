import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import { ThemeOptions } from '../BaseComponents/TextLinkLayout/TextLinkLayout';
import textLinkLayoutDriverFactory from '../BaseComponents/TextLinkLayout/TextLinkLayout.driver';

const textLinkDriverFactory = ({ element, wrapper, component }) => {
  const textLinkLayoutElement = element ? element.children[0] : null;
  const textLinkLayoutDriver = textLinkLayoutElement
    ? textLinkLayoutDriverFactory({ element: textLinkLayoutElement })
    : {};

  return {
    ...textLinkLayoutDriver,

    exists: () => !!element,
    isDisabled: () => element.getAttribute('disabled') !== null,
    click: (event = {}) => ReactTestUtils.Simulate.click(element, event),
    getTheme: () => {
      const color = textLinkLayoutDriver.getColor();
      if (color === 'rgb(240, 244, 247)') {
        return ThemeOptions.DARK_BACKGROUND.type;
      } else if (color === 'rgb(22, 45, 61)') {
        return ThemeOptions.GREYSCALE.type;
      }
      return ThemeOptions.NORMAL.type;
    },
    getLink: () => element.href,
    getTarget: () => element.target,
    getRel: () => element.rel,
    setProps: props => {
      const ClonedWithProps = React.cloneElement(
        component,
        Object.assign({}, component.props, props),
        ...(component.props.children || []),
      );
      ReactDOM.render(
        <div ref={r => (element = r)}>{ClonedWithProps}</div>,
        wrapper,
      );
    },
  };
};

export default textLinkDriverFactory;
