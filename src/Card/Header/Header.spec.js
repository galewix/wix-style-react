import React from 'react';
import { mount } from 'enzyme';
import { createDriverFactory } from 'wix-ui-test-utils/driver-factory';

import headerDriverFactory from './Header.driver';
import Header from './Header';
import { headerTestkitFactory } from '../../../testkit';
import { headerTestkitFactory as enzymeHeaderTestkitFactory } from '../../../testkit/enzyme';
import {
  isTestkitExists,
  isEnzymeTestkitExists,
} from '../../../test/utils/testkit-sanity';

describe('Header', () => {
  const createDriver = createDriverFactory(headerDriverFactory);

  describe('`title` prop', () => {
    it('should render as string', () => {
      const driver = createDriver(<Header title="Header Title" />);
      expect(driver.title()).toBe('Header Title');
    });

    it('should render as component', () => {
      const driver = createDriver(<Header title={<div>hello world</div>} />);
      expect(driver.title()).toBe('hello world');
    });
  });

  describe('`subtitle` prop', () => {
    it('should render as string', () => {
      const driver = createDriver(
        <Header subtitle="Header Subtitle" title="Header Title" />,
      );
      expect(driver.subtitle()).toBe('Header Subtitle');
    });

    it('should render as component', () => {
      const driver = createDriver(
        <Header subtitle={<div>hello world</div>} title="Header Title" />,
      );
      expect(driver.subtitle()).toBe('hello world');
    });
  });

  describe('testkits', () => {
    it('should exist', () => {
      expect(
        isTestkitExists(<Header title="dummy" />, headerTestkitFactory),
      ).toBe(true);
    });

    it('should exist for enzyme', () => {
      expect(
        isEnzymeTestkitExists(
          <Header title="dummy" />,
          enzymeHeaderTestkitFactory,
          mount,
        ),
      ).toBe(true);
    });
  });
});
