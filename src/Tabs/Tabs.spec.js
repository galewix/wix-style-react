import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import { mount } from 'enzyme';

import { createDriverFactory } from 'wix-ui-test-utils/driver-factory';
import tabsDriverFactory from './Tabs.driver';
import Tabs from './Tabs';
import { tabsTestkitFactory } from '../../testkit';
import { tabsTestkitFactory as enzymeTabsTestkitFactory } from '../../testkit/enzyme';

describe('Tabs component', () => {
  const createDriver = createDriverFactory(tabsDriverFactory);
  let items;

  beforeEach(() => {
    items = [
      { id: 0, title: 'Tab 0' },
      { id: 1, title: 'Tab 1', dataHook: 'tab-data-hook' },
      { id: 2, title: 'Tab 2' },
    ];
  });

  it('should render tabs with correct titles', () => {
    const driver = createComponent({ items });
    const expected = items.map(item => item.title);

    expect(driver.getTitles()).toEqual(expected);
  });

  it('should call onClick when tab is clicked', () => {
    const onClick = jest.fn();
    const driver = createComponent({ items, onClick });

    driver.clickTabAt(1);
    expect(onClick).toHaveBeenCalledWith(items[1]);
  });

  it('should mark tab as active', () => {
    const driver = createComponent({ items, activeId: 2 });
    expect(driver.getActiveTabIndex()).toBe(2);
  });

  it('should have data-hook', () => {
    const driver = createComponent({ items, activeId: 2 });
    expect(driver.getDataHook(1)).toBe('tab-data-hook');
  });

  it('should change active tab', () => {
    const driver = createComponent({ items, activeId: 2 });
    driver.setProps({ items, activeId: 1 });
    expect(driver.getActiveTabIndex()).toBe(1);
  });

  it('should have default type when not specified', () => {
    const driver = createComponent({ items });
    expect(driver.isDefaultType()).toBeTruthy();
  });

  it('should get custom style', () => {
    const type = 'compact';
    const driver = createComponent({ items, type });
    expect(
      driver.getItemsContainerClassList().contains('compact'),
    ).toBeTruthy();
  });

  it('should set tab width, when selected type is Uniform Side', () => {
    const width = '100px';
    const driver = createComponent({ items, width, type: 'uniformSide' });
    expect(driver.getItemsWidth().size).toBe(1);
    expect(driver.getItemsWidth().has(width)).toBeTruthy();
  });

  it('should show side content if defined via props', () => {
    const sideContent = (
      <div>
        Click <a>here</a>!
      </div>
    );
    const driver = createComponent({ items, sideContent });
    expect(driver.getSideContent()).toBeTruthy();
  });

  it('does not show side content if it is not passed via props', () => {
    const driver = createComponent({ items });
    expect(driver.getSideContent()).toBeFalsy();
  });

  it('should have divider by default', () => {
    const driver = createComponent({ items });

    expect(driver.hasDivider()).toBeTruthy();
  });

  it('should not have divider if props.divider is falsy', () => {
    const driver = createComponent({ items, hasDivider: false });

    expect(driver.hasDivider()).toBeFalsy();
  });

  it('should have divider if props.divider is truthy', () => {
    const driver = createComponent({ items, hasDivider: true });

    expect(driver.hasDivider()).toBeTruthy();
  });

  describe('testkit', () => {
    it('should exist', () => {
      const div = document.createElement('div');
      const dataHook = 'myDataHook';
      const wrapper = div.appendChild(
        ReactTestUtils.renderIntoDocument(
          <div>
            <Tabs items={[]} dataHook={dataHook} />
          </div>,
        ),
      );
      const breadcrumbsTestkit = tabsTestkitFactory({ wrapper, dataHook });
      expect(breadcrumbsTestkit.exists()).toBeTruthy();
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', () => {
      const dataHook = 'myDataHook';
      const wrapper = mount(<Tabs items={[]} dataHook={dataHook} />);
      const breadcrumbsTestkit = enzymeTabsTestkitFactory({
        wrapper,
        dataHook,
      });
      expect(breadcrumbsTestkit.exists()).toBeTruthy();
    });
  });

  function createComponent(props) {
    return createDriver(<Tabs {...props} />);
  }
});
