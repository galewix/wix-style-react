import React from 'react';
import RadioButton from './RadioButton';
import radioButtonDriverFactory from './RadioButton.driver';
import { createDriverFactory } from 'wix-ui-test-utils/driver-factory';
import { radioButtonTestkitFactory } from '../../../testkit';
import {
  isTestkitExists,
  isEnzymeTestkitExists,
} from '../../../test/utils/testkit-sanity';
import { radioButtonTestkitFactory as enzymeRadioButtonTestkitFactory } from '../../../testkit/enzyme';
import { mount } from 'enzyme';

describe('RadioButton', () => {
  const createDriver = createDriverFactory(radioButtonDriverFactory);

  it('should have a label', () => {
    const label = 'myLabel';
    const driver = createDriver(<RadioButton value="1">{label}</RadioButton>);
    expect(driver.getLabel()).toBe(label);
  });

  it('should be disabled', () => {
    const driver = createDriver(<RadioButton value="1" disabled />);
    expect(driver.isDisabled()).toBe(true);
  });

  it('should be checked', () => {
    const driver = createDriver(<RadioButton value="1" checked />);
    expect(driver.isChecked()).toBe(true);
  });

  it('should call onChange', () => {
    const onChange = jest.fn();
    const value = 1;
    const driver = createDriver(
      <RadioButton value={value} onChange={onChange} />,
    );
    driver.check();
    expect(onChange).toBeCalledWith(value);
  });

  it('should not call onChange if already checked', () => {
    const onChange = jest.fn();
    const value = 1;
    const driver = createDriver(
      <RadioButton value={value} onChange={onChange} checked />,
    );
    driver.check();
    expect(onChange).not.toBeCalledWith(value);
  });

  it('should not call onChange if disabled', () => {
    const onChange = jest.fn();
    const value = 1;
    const driver = createDriver(
      <RadioButton value={value} onChange={onChange} disabled />,
    );
    driver.check();
    expect(onChange).not.toBeCalledWith(value);
  });

  describe('given `content` prop', () => {
    it('should render node from that prop', () => {
      const driver = createDriver(<RadioButton content={<span>Hello</span>} />);
      expect(driver.getContent().textContent).toBe('Hello');
    });
  });

  describe('testkit', () => {
    it('should exist', () => {
      expect(isTestkitExists(<RadioButton />, radioButtonTestkitFactory)).toBe(
        true,
      );
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', () => {
      expect(
        isEnzymeTestkitExists(
          <RadioButton />,
          enzymeRadioButtonTestkitFactory,
          mount,
        ),
      ).toBe(true);
    });
  });
});
