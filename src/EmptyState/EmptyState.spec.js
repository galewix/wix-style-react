import React from 'react';
import { mount } from 'enzyme';
import { createDriverFactory } from 'wix-ui-test-utils/driver-factory';
import { isEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isTestkitExists } from 'wix-ui-test-utils/vanilla';
import EmptyState from './EmptyState';
import emptyStateDriverFactory from './EmptyState.driver';
import { emptyStateTestkitFactory } from '../../testkit';
import { emptyStateTestkitFactory as enzymeEmptyStateTestkitFactory } from '../../testkit/enzyme';

describe('EmptyState', () => {
  const createDriver = createDriverFactory(emptyStateDriverFactory);

  const defaultProps = {
    title: 'My awesome title',
    subtitle: 'My awesome subtitle',
  };

  it('should have a title and a subtitle', () => {
    const driver = createDriver(<EmptyState {...defaultProps} />);

    expect(driver.getTitleText()).toEqual('My awesome title');
    expect(driver.getSubtitleText()).toEqual('My awesome subtitle');
  });

  it('should have an image', () => {
    const driver = createDriver(
      <EmptyState {...defaultProps} image="http://wix.com/some-image.png" />,
    );

    expect(driver.getImageUrl()).toEqual('http://wix.com/some-image.png');
  });

  it('should support image passed as a node', () => {
    const driver = createDriver(
      <EmptyState {...defaultProps} image={<span>I am the image node</span>} />,
    );

    expect(driver.imageNodeExists()).toEqual(true);
  });

  it("should render it's children", () => {
    const driver = createDriver(
      <EmptyState {...defaultProps}>
        <button>I am a button!</button>
      </EmptyState>,
    );

    expect(driver.childrenContentExists()).toEqual(true);
  });

  describe('testkit', () => {
    it('should exist', () => {
      expect(
        isTestkitExists(
          <EmptyState {...defaultProps} />,
          emptyStateTestkitFactory,
        ),
      ).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', () => {
      expect(
        isEnzymeTestkitExists(
          <EmptyState {...defaultProps} />,
          enzymeEmptyStateTestkitFactory,
          mount,
        ),
      ).toBe(true);
    });
  });
});
