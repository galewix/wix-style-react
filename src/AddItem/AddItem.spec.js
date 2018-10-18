import React from 'react';
import {mount} from 'enzyme';

import {createDriverFactory} from 'wix-ui-test-utils/driver-factory';
import addItemDriverFactory from './AddItem.driver';

const createDriver = createDriverFactory(addItemDriverFactory);

import AddItem from './AddItem';

describe('AddItem', () => {
  const renderAddItem = (props = {}) => <AddItem {...props}/>;

  it('should have correct displayName', () => {
    const wrapper = mount(renderAddItem());
    expect(wrapper.name()).toEqual('WithFocusable(AddItem)');
  });

  describe('`children` prop', () => {
    const text = 'Add New Item';
    const child = <div data-hook="child">Hello</div>;
    it('should render text component when string is passed', () => {
      const driver = createDriver(renderAddItem({children: text}));
      expect(driver.getText()).toEqual(text);
    });

    it('should render children as component', () => {
      const wrapper = mount(renderAddItem({children: child}));
      expect(wrapper.find(`[data-hook*="child"]`).exists()).toEqual(true);
    });

    it('should not render text when children is undefined', () => {
      const driver = createDriver(renderAddItem());
      expect(driver.textExists()).toEqual(false);
    });

    it('should not render children as string when theme is `image`', () => {
      const driver = createDriver(
        renderAddItem({children: text, theme: 'image'})
      );
      expect(driver.textExists()).toEqual(false);
    });

    it('should not render children as component when theme is `image`', () => {
      const wrapper = mount(renderAddItem({children: child, theme: 'image'}));
      expect(wrapper.find(`[data-hook*="child"]`).exists()).toEqual(false);
    });
  });

  describe('`onClick` prop', () => {
    it('should call onClick when clicked', () => {
      const onClick = jest.fn();
      const driver = createDriver(renderAddItem({onClick, theme: 'image'}));
      driver.click();
      expect(onClick).toHaveBeenCalled();
    });
  });

  describe('`disable` prop ', () => {
    it('should not call onClick when disabled', () => {
      const onClick = jest.fn();
      const driver = createDriver(renderAddItem({onClick, disabled: true}));
      driver.click();
      expect(onClick).not.toHaveBeenCalled();
    });
  });

  describe('Icon svg', () => {
    it('should render', () => {
      const wrapper = mount(renderAddItem());
      expect(wrapper.find(`[data-hook*="additem-icon"]`).exists()).toEqual(
        true
      );
    });
  });

  describe('Tooltip', () => {
    const tooltipContent = 'I am ToolTip';
    it('should render tooltip with given tooltip content', async () => {
      const driver = createDriver(renderAddItem({tooltipContent}));
      expect(await driver.getTooltipContent()).toEqual(tooltipContent);
    });

    it(`should not render when disabled`, () => {
      const wrapper = mount(renderAddItem({tooltipContent, disabled: true}));
      expect(wrapper.find(`[data-hook*="additem-tooltip"]`).exists()).toEqual(
        false
      );
    });
  });
});
