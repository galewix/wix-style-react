import React from 'react';
import ReactDOM from 'react-dom';
import { tickerTestkitFactory } from '../Input/Ticker/testkit/Ticker';
import ReactTestUtils from 'react-dom/test-utils';
import styles from './TimeInput.scss';
import { testkitFactoryCreator } from 'wix-ui-test-utils/vanilla';
import inputDriverFactory from '../Input/Input.driver';

const inputTestkitFactory = testkitFactoryCreator(inputDriverFactory);

const timeInputDriverFactory = ({ element, wrapper, component }) => {
  const input = () =>
    inputTestkitFactory({ wrapper: element, dataHook: 'time-input' });
  const inputTicker = () => tickerTestkitFactory({ wrapper: element });
  const amPmIndicator = () =>
    element.querySelector('[data-hook="am-pm-indicator"]');
  return {
    exists: () => !!element,
    getValue: () => input().getValue(),
    isDisabled: () => input().isDisabled(),
    clickTickerUp: () => inputTicker().clickUp(),
    clickTickerDown: () => inputTicker().clickDown(),
    isAmPmIndicatorExist: () => !!amPmIndicator(),
    toggleAmPmIndicator: () => ReactTestUtils.Simulate.click(amPmIndicator()),
    getAmPmIndicatorText: () => amPmIndicator().textContent,
    isRtl: () => !!element.querySelector(`.${styles.rtl}`),
    setValue: value => input().enterText(value),
    blur: () => input().blur(),
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
export default timeInputDriverFactory;
