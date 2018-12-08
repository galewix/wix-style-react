import React from 'react';
import ButtonLayout from './ButtonLayout';
import { createDriverFactory } from 'wix-ui-test-utils/driver-factory';
import buttonDriverFactory from './ButtonLayout.driver';

const someDivWithLayout = (props = {}) => (
  <ButtonLayout {...props}>
    <div>abc</div>
  </ButtonLayout>
);

describe('ButtonLayout', () => {
  const createDriver = createDriverFactory(buttonDriverFactory);

  it('should wrap a native component with ButtonLayout', () => {
    const driver = createDriver(someDivWithLayout());

    expect(driver.exists()).toEqual(true);
    expect(driver.doesComponentHasClass('fullblue')).toEqual(true);
  });

  it('should preserve all existing properties of the element', () => {
    const href = 'http://www.wix.com';
    const driver = createDriver(
      <ButtonLayout>
        <a href={href}>abc</a>
      </ButtonLayout>,
    );

    expect(driver.exists()).toEqual(true);
    expect(driver.getComponentAttribute('href')).toEqual(href);
  });

  it('should have custom className', () => {
    const driver = createDriver(
      <ButtonLayout className="myClass">
        <div>abc</div>
      </ButtonLayout>,
    );

    expect(driver.doesComponentHasClass('myClass')).toBeTruthy();
  });

  it('should extend existing className of the element', () => {
    const driver = createDriver(
      <ButtonLayout>
        <div className="myClass">abc</div>
      </ButtonLayout>,
    );

    expect(driver.exists()).toEqual(true);
    expect(driver.doesComponentHasClass('myClass')).toEqual(true);
  });

  it('should extend existing inline style of the element', () => {
    const driver = createDriver(
      <ButtonLayout>
        <div style={{ color: 'red' }}>abc</div>
      </ButtonLayout>,
    );

    expect(driver.exists()).toEqual(true);
    expect(driver.getComponentAttribute('style')).toContain('color: red;');
  });

  it('should wrap a custom component with ButtonLayout', () => {
    const CustomComponent = props => <div {...props}>abc</div>;
    const driver = createDriver(
      <ButtonLayout>
        <CustomComponent />
      </ButtonLayout>,
    );

    expect(driver.exists()).toEqual(true);
    expect(driver.doesComponentHasClass('fullblue')).toEqual(true);
  });

  it('should bypass some styles', () => {
    const driver = createDriver(someDivWithLayout());

    expect(driver.exists()).toEqual(true);
    expect(driver.getComponentAttribute('style')).toContain(
      'display: inline-block;',
    );
  });

  describe('class', () => {
    it('should get disabled class', () => {
      const driver = createDriver(someDivWithLayout({ disabled: true }));

      expect(driver.doesComponentHasClass('disabled')).toBeTruthy();
    });

    it('should have default "fullblue" style', () => {
      const driver = createDriver(someDivWithLayout());

      expect(driver.doesComponentHasClass('fullblue')).toBeTruthy();
    });

    it('should get "small" height class', () => {
      const height = 'small';
      const driver = createDriver(someDivWithLayout({ height }));

      expect(driver.doesComponentHasClass(`heightsmall`)).toBeTruthy();
    });

    it('should get "large" height class', () => {
      const height = 'large';
      const driver = createDriver(someDivWithLayout({ height }));

      expect(driver.doesComponentHasClass(`heightlarge`)).toBe(true);
    });

    it('should get custom style', () => {
      const theme = 'emptyblue';
      const driver = createDriver(someDivWithLayout({ theme }));

      expect(driver.doesComponentHasClass(theme)).toBeTruthy();
    });

    it('should get "hover" class', () => {
      const driver = createDriver(someDivWithLayout({ hover: true }));

      expect(driver.doesComponentHasClass('hover')).toBeTruthy();
    });
  });
});
