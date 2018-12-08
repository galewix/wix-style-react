import React from 'react';
import { render } from 'react-dom';

const highlighterDriverFactory = ({ element, wrapper, component }) => {
  return {
    exists: () => !!element,
    html: () => element.innerHTML,
    getElement: () => element,
    setProps: props => {
      const ClonedWithProps = React.cloneElement(
        component,
        Object.assign({}, component.props, props),
        ...(component.props.children || []),
      );
      render(<div ref={r => (element = r)}>{ClonedWithProps}</div>, wrapper);
    },
  };
};

export default highlighterDriverFactory;
