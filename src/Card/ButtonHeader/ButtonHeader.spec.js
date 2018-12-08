import { mount } from 'enzyme';
import React from 'react';
import sinon from 'sinon';

import {
  buttonHeaderTestkitFactory,
  buttonTestkitFactory,
} from '../../../testkit';
import { buttonHeaderTestkitFactory as enzymeButtonHeaderTestkitFactory } from '../../../testkit/enzyme';
import { createDriverFactory } from 'wix-ui-test-utils/driver-factory';

import ButtonHeader from './ButtonHeader';
import buttonHeaderDriverFactory from './ButtonHeader.driver';
import {
  isTestkitExists,
  isEnzymeTestkitExists,
} from '../../../test/utils/testkit-sanity';

describe('ButtonHeader', () => {
  const createDriver = createDriverFactory(buttonHeaderDriverFactory);

  it('should have a title', () => {
    const driver = createDriver(
      <ButtonHeader
        buttonOnClick={() => {}}
        buttonTitle="Click me"
        title="Header Title"
      />,
    );
    expect(driver.title()).toBe('Header Title');
  });

  it('should have a subtitle', () => {
    const driver = createDriver(
      <ButtonHeader
        buttonOnClick={() => {}}
        buttonTitle="Click me"
        subtitle="Header Subtitle"
        title="Header Title"
      />,
    );
    expect(driver.subtitle()).toBe('Header Subtitle');
  });

  it('should have a button testKit', () => {
    const driver = createDriver(
      <ButtonHeader
        buttonOnClick={() => {}}
        buttonTitle="Click me"
        subtitle="Header Subtitle"
        title="Header Title"
      />,
    );
    const buttonDriverTestkit = buttonTestkitFactory({
      wrapper: driver.element(),
      dataHook: driver.buttonDataHook(),
    });
    expect(buttonDriverTestkit.getButtonTextContent()).toBe('Click me');
  });

  it('should click on button', () => {
    const onClick = sinon.spy();

    const driver = createDriver(
      <ButtonHeader
        buttonOnClick={onClick}
        buttonTitle="Click me"
        subtitle="Header Subtitle"
        title="Header Title"
      />,
    );

    driver.click();

    expect(onClick.calledOnce).toBeTruthy();
  });

  describe('testkits', () => {
    it('should exist', () => {
      expect(
        isTestkitExists(
          <ButtonHeader
            buttonTitle="Click me"
            subtitle="Header Subtitle"
            title="Header Title"
            buttonOnClick={() => {}}
          />,
          buttonHeaderTestkitFactory,
        ),
      ).toBe(true);
    });

    it('should exist for enzyme', () => {
      expect(
        isEnzymeTestkitExists(
          <ButtonHeader
            buttonTitle="Click me"
            subtitle="Header Subtitle"
            title="Header Title"
            buttonOnClick={() => {}}
          />,
          enzymeButtonHeaderTestkitFactory,
          mount,
        ),
      ).toBe(true);
    });
  });
});
