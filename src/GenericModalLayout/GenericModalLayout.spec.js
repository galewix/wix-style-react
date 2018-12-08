import { mount } from 'enzyme';
import React from 'react';
import { createDriverFactory } from 'wix-ui-test-utils/driver-factory';

import {
  isEnzymeTestkitExists,
  isTestkitExists,
} from '../../test/utils/testkit-sanity';
import { genericModalLayoutTestkitFactory } from '../../testkit';
import { genericModalLayoutTestkitFactory as enzymeGenericModalLayoutTestkitFactory } from '../../testkit/enzyme';

import GenericModalLayout from '.';
import genericModalLayoutPrivateDriverFactory from './GenericModalLayout.driver.private';

const renderWithProps = (properties = {}) => (
  <GenericModalLayout {...properties} />
);

describe('GenericModalLayout', () => {
  const createPrivateDriver = createDriverFactory(
    genericModalLayoutPrivateDriverFactory,
  );

  it('should render', () => {
    const driver = createPrivateDriver(renderWithProps());
    expect(driver.exists()).toBeTruthy();
  });

  it('should render header', () => {
    const driver = createPrivateDriver(
      renderWithProps({
        header: <div data-hook="generic-modal-layout-header">Header</div>,
      }),
    );

    expect(driver.getHeaderTextContent()).toEqual('Header');
  });

  it('should render content', () => {
    const driver = createPrivateDriver(
      renderWithProps({
        content: <div data-hook="generic-modal-layout-content">Content</div>,
      }),
    );

    expect(driver.getContentTextContent()).toEqual('Content');
  });

  it('should render footer', () => {
    const driver = createPrivateDriver(
      renderWithProps({
        footer: <div data-hook="generic-modal-layout-footer">Footer</div>,
      }),
    );

    expect(driver.getFooterTextContent()).toEqual('Footer');
  });

  describe('fullscreen', () => {
    it('should render not fullscreen as default', () => {
      const driver = createPrivateDriver(renderWithProps());

      expect(driver.isFullscreen()).toBeFalsy();
    });

    it('should render fullscreen layout', () => {
      const driver = createPrivateDriver(
        renderWithProps({
          fullscreen: true,
        }),
      );

      expect(driver.isFullscreen()).toBeTruthy();
    });

    it('should render not fullscreen layout', () => {
      const driver = createPrivateDriver(
        renderWithProps({
          fullscreen: false,
        }),
      );

      expect(driver.isFullscreen()).toBeFalsy();
    });
  });

  describe('testkit', () => {
    it('should exist', () => {
      expect(
        isTestkitExists(
          <GenericModalLayout />,
          genericModalLayoutTestkitFactory,
        ),
      ).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', () => {
      expect(
        isEnzymeTestkitExists(
          <GenericModalLayout />,
          enzymeGenericModalLayoutTestkitFactory,
          mount,
        ),
      ).toBe(true);
    });
  });
});
