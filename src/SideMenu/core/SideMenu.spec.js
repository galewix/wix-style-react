import React from 'react';
import { createDriverFactory } from 'wix-ui-test-utils/driver-factory';
import sideMenuDriverFactory from './SideMenu.driver';
import SideMenu from '../index';

describe('SideMenu', () => {
  const createDriver = createDriverFactory(sideMenuDriverFactory);
  function createComponent({ header, navigation, promotion, footer }) {
    return createDriver(
      <SideMenu>
        {header && <SideMenu.Header>{header}</SideMenu.Header>}
        {navigation && <SideMenu.Navigation>{navigation}</SideMenu.Navigation>}
        {promotion && <SideMenu.Promotion>{promotion}</SideMenu.Promotion>}
        {footer && <SideMenu.Footer>{footer}</SideMenu.Footer>}
      </SideMenu>,
    );
  }

  it('should render empty menu', () => {
    const driver = createComponent({});

    expect(driver.exists()).toBe(true);
    expect(driver.hasHeader()).toBe(false);
    expect(driver.hasNavigation()).toBe(false);
    expect(driver.hasPromotion()).toBe(false);
    expect(driver.hasFooter()).toBe(false);
  });

  it('should render full menu', () => {
    const menu = {
      header: 'Hello Header',
      navigation: [
        <SideMenu.NavigationLink key="0" href="//wix.com" />,
        <SideMenu.NavigationSeparator key="1" />,
        <SideMenu.NavigationLink key="2" href="//wix.com" />,
      ],
      promotion: 'Hello Promotion',
      footer: 'Hello Footer',
    };
    const driver = createComponent(menu);

    expect(driver.exists()).toBe(true);

    expect(driver.hasHeader()).toBe(true);
    expect(driver.headerContent()).toBe(menu.header);

    expect(driver.hasNavigation()).toBe(true);
    expect(driver.navigationLinks()).toHaveLength(2);
    expect(driver.navigationSeparators()).toHaveLength(1);

    expect(driver.hasPromotion()).toBe(true);
    expect(driver.promotionContent()).toBe(menu.promotion);

    expect(driver.hasFooter()).toBe(true);
    expect(driver.footerContent()).toBe(menu.footer);
  });

  it('should render a sub menu', () => {
    const menu = {
      navigation: [
        <SideMenu.NavigationBackLink key="0">Back</SideMenu.NavigationBackLink>,
        <SideMenu.NavigationCategory key="1">
          Category 1
        </SideMenu.NavigationCategory>,
        <SideMenu.NavigationLink key="2" href="//wix.com" />,
      ],
    };

    const driver = createComponent(menu);

    expect(driver.hasBackLink()).toBe(true);
    expect(driver.navigationCategories()).toHaveLength(1);
    expect(driver.navigationLinks()).toHaveLength(1);
  });

  it('should allow to click on a back menu', () => {
    const spy = jest.fn();
    const menu = {
      navigation: [
        <SideMenu.NavigationBackLink key="0" onBackHandler={spy}>
          Back
        </SideMenu.NavigationBackLink>,
      ],
    };

    const driver = createComponent(menu);
    driver.clickBackLink();

    expect(spy).toHaveBeenCalled();
  });

  it('should allow to select a menu navigation link', () => {
    const spy = jest.fn();
    const menu = {
      navigation: [
        <SideMenu.NavigationLink key="0" />,
        <SideMenu.NavigationLink key="1" onClick={spy} />,
        <SideMenu.NavigationLink key="2" />,
      ],
    };

    const driver = createComponent(menu);
    driver.clickLinkByIndex(1);

    expect(spy).toHaveBeenCalled();
  });

  it('should allow to have a badge', () => {
    const badge = <SideMenu.NavigationBadge />;
    const menu = {
      navigation: [
        <SideMenu.NavigationLink key="0" />,
        <SideMenu.NavigationLink key="1" badge={badge} />,
        <SideMenu.NavigationLink key="2" />,
      ],
    };

    const driver = createComponent(menu);
    expect(driver.isLinkBadgeVisibleByIndex(0)).toBe(false);
    expect(driver.isLinkBadgeVisibleByIndex(1)).toBe(true);
    expect(driver.isLinkBadgeVisibleByIndex(2)).toBe(false);
  });
});
