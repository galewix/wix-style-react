import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';

const buttonHeaderDriverFactory = ({ element, wrapper, component }) => {
  const title = element.querySelector('[data-hook="title"]');
  const subtitle = element.querySelector('[data-hook="subtitle"]');
  const button = element.querySelector('[data-hook="button"]');

  return {
    exists: () => !!element,
    title: () => title && title.innerHTML,
    subtitle: () => subtitle && subtitle.innerHTML,
    element: () => element,
    buttonDataHook: () => 'button',
    click: () => ReactTestUtils.Simulate.click(button),
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

export default buttonHeaderDriverFactory;
