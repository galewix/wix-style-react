/* eslint-disable no-console */
import React from 'react';
import SideMenu from '../index';
import SideMenuDrill from './index';
import { createDriverFactory } from 'wix-ui-test-utils/driver-factory';
import drillViewDriverFactory from './DrillView.driver';

describe('DrillView', () => {
  const linksPerLevel = 3;
  const subMenusPerLevel = 2;
  const createDriver = createDriverFactory(drillViewDriverFactory);
  const getHeader = level => `Level ${level} - Start`;
  const getFooter = level => `Level ${level} - End`;
  let onClickSpy, onSubMenuClickSpy, onSubMenuBackSpy;

  beforeEach(() => {
    onClickSpy = jest.fn();
    onSubMenuClickSpy = jest.fn();
    onSubMenuBackSpy = jest.fn();
  });

  function createLinksForLevel(level, activeLink, isLinkDisabled = false) {
    const { activeLevel, activeIndex } = activeLink;
    const isLevelActive = activeLevel === level;

    return [...new Array(linksPerLevel)].map((_, i) => {
      return (
        <SideMenuDrill.Link
          key={`${level}_${i}`}
          isActive={isLevelActive && activeIndex === i}
        >
          <a href="//wix.com" onClick={onClickSpy} disabled={isLinkDisabled}>
            Link {i}
          </a>
        </SideMenuDrill.Link>
      );
    });
  }

  function createSubMenu(
    key,
    level,
    maxLevel,
    activeLink,
    isDisabled,
    isLinkDisabled = false,
  ) {
    const menuKey = `${key}_${level}`;
    return (
      <SideMenuDrill.SubMenu
        key={menuKey}
        menuKey={menuKey}
        title={menuKey}
        onSelectHandler={onSubMenuClickSpy}
        onBackHandler={onSubMenuBackSpy}
        disabled={isDisabled}
      >
        <SideMenu.Header>{getHeader(level)}</SideMenu.Header>
        <SideMenuDrill.Navigation>
          {createLinksForLevel(level, activeLink, isLinkDisabled)}
          {createSubMenus(
            `${key}_${level}`,
            level + 1,
            maxLevel,
            activeLink,
            false,
            isLinkDisabled,
          )}
        </SideMenuDrill.Navigation>
        <SideMenu.Footer>{getFooter(level)}</SideMenu.Footer>
      </SideMenuDrill.SubMenu>
    );
  }

  function createSubMenus(
    key,
    level,
    maxLevel,
    activeLink,
    isDisabled,
    isLinkDisabled = false,
  ) {
    if (level > maxLevel) {
      return <div />;
    }

    return [...new Array(subMenusPerLevel)].map((_, i) => {
      return createSubMenu(
        key + i,
        level,
        maxLevel,
        activeLink,
        isDisabled,
        isLinkDisabled,
      );
    });
  }

  function createSideMenu(
    maxLevel,
    activeLink = {},
    isSubMenuDisabled = false,
    isLinkDisabled = false,
  ) {
    return createDriver(
      <SideMenuDrill>
        <SideMenu.Header>{getHeader(0)}</SideMenu.Header>
        {createLinksForLevel(0, activeLink, isLinkDisabled)}
        {createSubMenus(
          'SubMenu',
          1,
          maxLevel,
          activeLink,
          isSubMenuDisabled,
          isLinkDisabled,
        )}
        <SideMenu.Footer>{getFooter(0)}</SideMenu.Footer>
      </SideMenuDrill>,
    );
  }

  it('should have a sticky footer through props', () => {
    const driver = createDriver(
      <SideMenuDrill
        stickyFooter={<SideMenu.Footer>{getFooter(1)}</SideMenu.Footer>}
      >
        {createLinksForLevel(0, {})}
      </SideMenuDrill>,
    );

    expect(!!driver.getStickyFooter()).toBe(true);
  });

  it('should render a one level drill view', () => {
    const driver = createSideMenu(0);

    expect(driver.getMenuDriver().headerContent()).toBe(getHeader(0));
    expect(driver.getMenuDriver().footerContent()).toBe(getFooter(0));
    expect(driver.getMenuDriver().navigationInnerLinks()).toHaveLength(
      linksPerLevel,
    );
  });

  it('should render a one level drill view with an active item', () => {
    const activeLevel = 0;
    const activeIndex = 1;
    const driver = createSideMenu(0, { activeLevel, activeIndex });

    expect(driver.getMenuDriver().headerContent()).toBe(getHeader(0));
    expect(driver.getMenuDriver().footerContent()).toBe(getFooter(0));
    expect(driver.getMenuDriver().isLinkActiveByIndex(0)).toBe(false);
    expect(driver.getMenuDriver().isLinkActiveByIndex(activeIndex)).toBe(true);
  });

  it('should initially render the sub menu of the active link', () => {
    const activeLevel = 1;
    const activeIndex = 1;
    const driver = createSideMenu(1, { activeLevel, activeIndex });

    expect(driver.getMenuDriver().headerContent()).toBe(getHeader(1));
    expect(driver.getMenuDriver().footerContent()).toBe(getFooter(1));
    expect(driver.getMenuDriver().hasBackLink()).toBe(true);
    expect(driver.getMenuDriver().isLinkActiveByIndex(activeIndex)).toBe(true);
    expect(driver.getMenuDriver().navigationCategoryContent(0)).toBe(
      'SubMenu1_1',
    );
  });

  it("should NOT trigger first child link's click when clicking a disabled sub menu", () => {
    const driver = createSideMenu(3, {}, false, true);

    expect(driver.getMenuDriver().headerContent()).toBe(getHeader(0));
    expect(driver.getMenuDriver().footerContent()).toBe(getFooter(0));
    expect(driver.getMenuDriver().hasBackLink()).toBe(false);

    // click the first link
    expect(onClickSpy.mock.calls).toHaveLength(0);
    driver.getMenuDriver().clickInnerLinkByIndex(3);

    expect(onClickSpy.mock.calls).toHaveLength(0);
    expect(onSubMenuClickSpy.mock.calls).toHaveLength(1);
  });

  it("should trigger first child link's click when clicking a sub menu", () => {
    const driver = createSideMenu(3);

    expect(driver.getMenuDriver().headerContent()).toBe(getHeader(0));
    expect(driver.getMenuDriver().footerContent()).toBe(getFooter(0));
    expect(driver.getMenuDriver().hasBackLink()).toBe(false);

    // click the first sub menu
    expect(onClickSpy.mock.calls).toHaveLength(0);
    driver.getMenuDriver().clickInnerLinkByIndex(3);

    expect(onClickSpy).toHaveBeenCalled();
    expect(onSubMenuClickSpy).toHaveBeenCalled();
    expect(onClickSpy.mock.calls).toHaveLength(1);
    expect(onSubMenuClickSpy.mock.calls).toHaveLength(1);
  });

  it('should have a disabled css when disabled prop is passed', () => {
    const driver = createSideMenu(3, {}, true);

    expect(driver.getMenuDriver().headerContent()).toBe(getHeader(0));
    expect(driver.getMenuDriver().footerContent()).toBe(getFooter(0));
    expect(driver.getMenuDriver().hasBackLink()).toBe(false);

    // click the first sub menu
    expect(onClickSpy.mock.calls).toHaveLength(0);
    driver.getMenuDriver().clickInnerLinkByIndex(3);

    expect(driver.getMenuDriver().isLinkDisabledByIndex(3)).toBe(true);
  });

  it('should NOT have a disabled css when disabled prop is passed', () => {
    const driver = createSideMenu(3);

    expect(driver.getMenuDriver().headerContent()).toBe(getHeader(0));
    expect(driver.getMenuDriver().footerContent()).toBe(getFooter(0));
    expect(driver.getMenuDriver().hasBackLink()).toBe(false);

    // click the first sub menu
    expect(onClickSpy.mock.calls).toHaveLength(0);
    driver.getMenuDriver().clickInnerLinkByIndex(3);

    expect(driver.getMenuDriver().isLinkDisabledByIndex(3)).toBe(false);
  });

  it('should navigate to a parent menu and sub menu link should be active', done => {
    const activeLevel = 1;
    const activeIndex = 1;
    const driver = createSideMenu(1, { activeLevel, activeIndex });

    expect(driver.getMenuDriver().headerContent()).toBe(getHeader(1));
    expect(driver.getMenuDriver().footerContent()).toBe(getFooter(1));
    expect(driver.getMenuDriver().isLinkActiveByIndex(activeIndex)).toBe(true);
    expect(driver.getMenuDriver().hasBackLink()).toBe(true);

    driver.getMenuDriver().clickBackLink();

    setTimeout(() => {
      expect(driver.getMenuDriver().headerContent()).toBe(getHeader(0));
      expect(driver.getMenuDriver().footerContent()).toBe(getFooter(0));
      expect(driver.getMenuDriver().isLinkActiveByIndex(3)).toBe(true);
      expect(onSubMenuBackSpy).toHaveBeenCalled();
      expect(onSubMenuBackSpy.mock.calls).toHaveLength(1);
      done();
    }, 600);
  });
});
