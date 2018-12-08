import React from 'react';
import { createDriverFactory } from 'wix-ui-test-utils/driver-factory';

import Skeleton from './Skeleton';
import skeletonDriverFactory from './Skeleton.driver';

const content = [
  { type: 'line', size: 'small' },
  { type: 'line', size: 'large' },
  { type: 'line', size: 'medium' },
  { type: 'line', size: 'full' },
];

const createDriver = createDriverFactory(skeletonDriverFactory);
let driver;

describe('Skeleton', () => {
  describe('with default props', () => {
    beforeEach(() => {
      driver = createDriver(<Skeleton {...{ content }} />);
    });

    it(`should have ${content.length} placeholder lines`, () => {
      expect(driver.getNumLines()).toBe(content.length);
    });

    it('should have medium spacing by default', () => {
      expect(driver.hasSpacing('medium')).toBe(true);
    });

    it('should have lines with expected sizes', () => {
      expect(driver.hasSizes(content.map(({ size }) => size))).toBe(true);
    });
  });

  describe('`alignment` prop', () => {
    it('should align to middle', () => {
      driver = createDriver(<Skeleton {...{ content, alignment: 'middle' }} />);
      expect(driver.hasAlignment('middle')).toBe(true);
    });
  });
});
