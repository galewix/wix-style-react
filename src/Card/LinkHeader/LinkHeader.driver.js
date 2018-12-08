import React from 'react';
import ReactDOM from 'react-dom';

const linkHeaderDriverFactory = ({ element, wrapper, component }) => {
  const title = element.querySelector('[data-hook="title"]');
  const subtitle = element.querySelector('[data-hook="subtitle"]');

  return {
    exists: () => !!element,
    title: () => title && title.innerHTML,
    subtitle: () => subtitle && subtitle.innerHTML,
    element: () => element,
    linkDataHook: () => 'link',
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

export default linkHeaderDriverFactory;
