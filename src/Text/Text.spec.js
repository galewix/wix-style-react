import React from 'react';
import textDriverFactory from './Text.driver';
import Text from '.';
import { SIZES, SKINS, WEIGHTS } from './constants';
import { createDriverFactory } from 'wix-ui-test-utils/driver-factory';
import { isEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isTestkitExists } from 'wix-ui-test-utils/vanilla';
import { textTestkitFactory } from '../../testkit';
import { textTestkitFactory as enzymeTextTestkitFactory } from '../../testkit/enzyme';
import { mount } from 'enzyme';

describe('Text', () => {
  const createDriver = createDriverFactory(textDriverFactory);

  describe('size prop', () => {
    it(`should be ${SIZES.medium} by default`, () => {
      const wrapper = createDriver(<Text>Hello</Text>);
      expect(wrapper.getSize()).toBe(SIZES.medium);
    });

    Object.keys(SIZES).forEach(size => {
      it(`should be ${size}`, () => {
        const wrapper = createDriver(<Text size={size}>Hello</Text>);
        expect(wrapper.getSize()).toBe(size);
      });
    });
  });

  describe('weight prop', () => {
    it(`should be ${WEIGHTS.thin} by default`, () => {
      const wrapper = createDriver(<Text>Hello</Text>);
      expect(wrapper.getWeight()).toBe(WEIGHTS.thin);
    });

    Object.keys(WEIGHTS).forEach(weight => {
      it(`should be ${weight}`, () => {
        const wrapper = createDriver(<Text weight={weight}>Hello</Text>);
        expect(wrapper.getWeight()).toBe(weight);
      });
    });
  });

  describe('secondary prop', () => {
    it('should be false by default', () => {
      const wrapper = createDriver(<Text>Hello</Text>);
      expect(wrapper.isSecondary()).toBe(false);
    });

    it(`should be true`, () => {
      const wrapper = createDriver(<Text secondary>Hello</Text>);
      expect(wrapper.isSecondary()).toBe(true);
    });
  });

  describe('skin prop', () => {
    it(`should be ${SKINS.standard} by default`, () => {
      const wrapper = createDriver(<Text>Hello</Text>);
      expect(wrapper.getSkin()).toBe(SKINS.standard);
    });

    Object.keys(SKINS).forEach(skin => {
      it(`should be ${skin}`, () => {
        const wrapper = createDriver(<Text skin={skin}>Hello</Text>);
        expect(wrapper.getSkin()).toBe(skin);
      });
    });
  });

  describe('light prop', () => {
    it('should be dark by default', () => {
      const wrapper = createDriver(<Text>Hello</Text>);
      expect(wrapper.isLight()).toBe(false);
    });

    it('should be light', () => {
      const wrapper = createDriver(<Text light>Hello</Text>);
      expect(wrapper.isLight()).toBe(true);
    });

    [SKINS.error, SKINS.success, SKINS.premium].forEach(skin => {
      it(`should be dark when skin is ${skin}`, () => {
        const wrapper = createDriver(
          <Text skin={skin} light>
            Hello
          </Text>,
        );
        expect(wrapper.isLight()).toBe(false);
      });
    });
  });

  describe('testkit', () => {
    it('should exist', () => {
      expect(
        isTestkitExists(<Text>Hello World</Text>, textTestkitFactory),
      ).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', () => {
      expect(
        isEnzymeTestkitExists(
          <Text>Hello World</Text>,
          enzymeTextTestkitFactory,
          mount,
        ),
      ).toBe(true);
    });
  });
});
