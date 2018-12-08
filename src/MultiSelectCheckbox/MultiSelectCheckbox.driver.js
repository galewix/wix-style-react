import React from 'react';
import inputWithOptionsDriverFactory from '../InputWithOptions/InputWithOptions.driver';
import ReactDOM from 'react-dom';

const multiSelectCheckboxDriverFactory = ({ element, wrapper, component }) => {
  const {
    driver,
    inputDriver,
    dropdownLayoutDriver,
  } = inputWithOptionsDriverFactory({ element, wrapper });
  const multiSelectCheckboxDriver = Object.assign(driver, {
    getNumOfLabels() {
      return this.getLabels().length;
    },
    getLabels: () => {
      return inputDriver.getValue().split(component.props.delimiter);
    },
    getLabelAt(index) {
      return this.getLabels()[index];
    },
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
  });

  return {
    driver: multiSelectCheckboxDriver,
    inputDriver,
    dropdownLayoutDriver,
  };
};

export default multiSelectCheckboxDriverFactory;
