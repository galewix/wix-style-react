import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';

const notificationDriverFactory = ({ element, wrapper, component }) => {
  const notificationWrapperSelector = '[data-hook="notification-wrapper"]';
  const labelTextSelector = '[data-hook="notification-label"]';
  const actionButtonSelector = '[data-hook="notification-cta-button"]';
  const closeButtonSelector = '[data-hook="notification-close-button"]';

  const classExists = className =>
    element
      .querySelector(notificationWrapperSelector)
      .classList.contains(className);

  return {
    exists: () => !!element,
    visible: () => !!element.querySelector(notificationWrapperSelector),
    hasTheme: theme => classExists(`${theme}Theme`),
    isStandardNotification: () => classExists('standardTheme'),
    isErrorNotification: () => classExists('errorTheme'),
    isSuccessNotification: () => classExists('successTheme'),
    isWarningNotification: () => classExists('warningTheme'),
    isPremiumNotification: () => classExists('premiumTheme'),
    isSmallSize: () => classExists('smallSize'),
    isBigSize: () => classExists('bigSize'),
    getLabelText: () => element.querySelector(labelTextSelector).textContent,
    hasActionButton: () => !!element.querySelector(actionButtonSelector),
    getActionButtonText: () =>
      element.querySelector(actionButtonSelector).textContent,
    hasCloseButton: () =>
      !!element.querySelector('[data-hook="notification-close-button"]'),
    isRelativelyPositioned: () => classExists('relativePosition'),
    isFixedPositioned: () => classExists('fixedPosition'),
    isAbsolutePositioned: () => classExists('absolutePosition'),
    clickOnCloseButton: () =>
      ReactTestUtils.Simulate.click(element.querySelector(closeButtonSelector)),
    clickOnActionButton: () =>
      ReactTestUtils.Simulate.click(
        element.querySelector(actionButtonSelector),
      ),
    getZIndex: () =>
      Number(
        element.querySelector(notificationWrapperSelector).style['z-index'],
      ),
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

export default notificationDriverFactory;
