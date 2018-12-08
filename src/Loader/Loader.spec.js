import React from 'react';
import Loader from './Loader';
import loaderDriverFactory from './Loader.driver';
import { createDriverFactory } from 'wix-ui-test-utils/driver-factory';
import { loaderTestkitFactory } from '../../testkit';
import { loaderTestkitFactory as enzymeLoaderTestkitFactory } from '../../testkit/enzyme';
import {
  isEnzymeTestkitExists,
  isTestkitExists,
} from '../../test/utils/testkit-sanity';
import { mount } from 'enzyme';

describe('Loader', () => {
  const createDriver = createDriverFactory(loaderDriverFactory);

  describe('size property', () => {
    it('should create a component with default medium size', () => {
      const driver = createDriver(<Loader />);
      expect(driver.isMedium()).toEqual(true);
    });

    it('should allow creating a tiny loader', () => {
      const driver = createDriver(<Loader size="tiny" />);
      expect(driver.isTiny()).toEqual(true);
    });

    it('should allow creating a small loader', () => {
      const driver = createDriver(<Loader size="small" />);
      expect(driver.isSmall()).toEqual(true);
    });

    it('should allow creating a medium loader', () => {
      const driver = createDriver(<Loader size="medium" />);
      expect(driver.isMedium()).toEqual(true);
    });

    it('should allow creating a large loader', () => {
      const driver = createDriver(<Loader size="large" />);
      expect(driver.isLarge()).toEqual(true);
    });
  });

  describe('text property', () => {
    it('should create a component with no text by default', () => {
      const driver = createDriver(<Loader />);
      expect(driver.hasText()).toEqual(false);
    });

    it('should create a component with text', () => {
      const text = 'All computers wait at the same speed';
      const driver = createDriver(<Loader text={text} />);
      expect(driver.hasText()).toEqual(true);
      expect(driver.getText()).toEqual(text);
    });

    it('should create a component with text element', () => {
      const text = 'All computers wait at the same speed';
      const textElement = <div>{text}</div>;
      const driver = createDriver(<Loader text={textElement} />);
      expect(driver.hasText()).toEqual(true);
      expect(driver.getText()).toMatch(text);
    });

    it('should not show text next to tiny loader', () => {
      const size = 'tiny';
      const text = 'All computers wait at the same speed';
      const driver = createDriver(<Loader size={size} text={text} />);
      expect(driver.hasText()).toEqual(false);
    });
  });

  describe('color property', () => {
    it('should be blue by default', () => {
      const driver = createDriver(<Loader />);
      expect(driver.getColor()).toEqual('blue');
    });

    it('should get the given color', () => {
      const driver = createDriver(<Loader color="white" />);
      expect(driver.getColor()).toEqual('white');
    });
  });

  describe('status property', () => {
    it('should be loading by default', () => {
      const driver = createDriver(<Loader />);
      expect(driver.isLoading()).toEqual(true);
    });

    it('should allow setting error status', () => {
      const driver = createDriver(<Loader status="error" />);
      expect(driver.isError()).toEqual(true);
    });

    it('should allow setting success status', () => {
      const driver = createDriver(<Loader status="success" />);
      expect(driver.isSuccess()).toEqual(true);
    });

    describe('tooltip message when hovered', () => {
      afterEach(() => {
        document.body.innerHTML = ''; // required for tooltip element to be removed and not to leak in consecutive tests
      });

      it('should show tooltip when hovered', async () => {
        const statusMessage = 'this is a some message';
        const driver = createDriver(
          <Loader status="success" statusMessage={statusMessage} />,
        );
        expect(await driver.getStatusMessage()).toBe(statusMessage);
      });
    });
  });

  describe('testkit', () => {
    it('should exist', () => {
      expect(isTestkitExists(<Loader />, loaderTestkitFactory)).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', () => {
      expect(
        isEnzymeTestkitExists(<Loader />, enzymeLoaderTestkitFactory, mount),
      ).toBe(true);
    });
  });

  it(`shouldn't throw when the Loader doesn't exist`, () => {
    expect(() => loaderDriverFactory({})).not.toThrow();
  });
});
