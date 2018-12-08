import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';

const radioButtonDriverFactory = ({ element, wrapper, component }) => {
  const radioButton = element.childNodes[0];
  const label = element.childNodes[1];

  return {
    exists: () => !!element,
    check: () => ReactTestUtils.Simulate.change(radioButton),
    isChecked: () => radioButton.checked,
    isDisabled: () => radioButton.disabled,
    getLabel: () => label.textContent,
    getContent: () =>
      element.querySelector('[data-hook="radio-button-content"]'),
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

export default radioButtonDriverFactory;
