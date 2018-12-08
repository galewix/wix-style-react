import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';

const messageBoxMarketerialLayoutDriverFactory = ({
  element,
  wrapper,
  component,
}) => {
  const primaryButton = () =>
    element.querySelector('[data-hook="primary-button"]');
  const secondaryButton = () =>
    element.querySelector('[data-hook="secondary-button"]');
  const closeButton = () => element.querySelector('[data-hook="close-button"]');

  return {
    exists: () => !!element,
    getPrimaryButtonText: () => primaryButton().textContent,
    getPrimaryButton: primaryButton,
    getSecondaryButtonText: () => secondaryButton().textContent,
    getSecondaryButton: secondaryButton,
    clickOnPrimaryButton: () => ReactTestUtils.Simulate.click(primaryButton()),
    clickOnSecondaryButton: () =>
      ReactTestUtils.Simulate.click(secondaryButton()),
    closeMessageBox: () => ReactTestUtils.Simulate.click(closeButton()),
    getTitle: () =>
      element.querySelector('[data-hook="message-box-title"]').textContent,
    getContentBySelector: selector => element.querySelector(selector),
    getImageSrc: () => element.querySelector('[data-hook="header-image"]').src,
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

export default messageBoxMarketerialLayoutDriverFactory;
