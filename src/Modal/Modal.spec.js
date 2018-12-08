import React from 'react';
import eventually from 'wix-eventually';

import Modal from './Modal';
import ModalFactory from './Modal.driver';
import { resolveIn } from '../../test/utils';
import { createRendererWithDriver, cleanup } from '../../test/utils/react';

const MODAL_CLOSE_TIMEOUT = 10;

describe('Modal', () => {
  let testDriver; // used for cleanup
  const render = jsx => {
    const rendered = createRendererWithDriver(ModalFactory)(jsx);
    testDriver = rendered.driver;
    return rendered;
  };

  afterEach(async () => {
    cleanup();
    if (testDriver !== null) {
      await eventually(() => !testDriver.isOpen() || Promise.reject(), {
        timeout: MODAL_CLOSE_TIMEOUT * 2,
        interval: 10,
      });
    }
    testDriver = null;
  });

  let props = {};

  beforeEach(() => {
    props = {};
    props.isOpen = true;
    props.contentLabel = 'modal_' + Math.random();
    props.closeTimeoutMS = MODAL_CLOSE_TIMEOUT;
  });

  describe('content', () => {
    it(`should not render the modal content if not open by default`, () => {
      props.isOpen = false;

      const { driver } = render(
        <Modal {...props}>
          <div data-hook="inner-div" />
        </Modal>,
      );
      expect(driver.getChildBySelector('[data-hook="inner-div"]')).toBeNull();
    });

    it(`should render the passed children in the markup`, () => {
      props.isOpen = true;
      const { driver } = render(
        <Modal {...props}>
          <div data-hook="inner-div" />
        </Modal>,
      );
      expect(
        driver.getChildBySelector('[data-hook="inner-div"]'),
      ).not.toBeNull();
    });

    describe('maxHeight', () => {
      it('should render maxHeight passed in props', () => {
        const { driver } = render(
          <Modal {...props} scrollableContent maxHeight="calc(100vh - 48px)" />,
        );
        const { driver: driver2 } = render(
          <Modal
            {...props}
            scrollableContent={false}
            maxHeight="calc(100vh - 48px)"
          />,
        );
        expect(driver.getContentStyle().maxHeight).toBe('calc(100vh - 48px)');
        expect(driver2.getContentStyle().maxHeight).toBe('calc(100vh - 48px)');
      });

      it('should render 100vh maxHeight when maxHeight is set to auto and content is scrollable', () => {
        const { driver } = render(
          <Modal {...props} scrollableContent maxHeight="auto" />,
        );
        expect(driver.getContentStyle().maxHeight).toBe('100vh');
      });

      it('content position should be relative', () => {
        const { driver } = render(<Modal {...props} />);
        expect(driver.getContentStyle().position).toBe('relative');
      });
    });
  });

  describe('callbacks', () => {
    it(`should trigger the onAfterOpen function`, () => {
      props.onAfterOpen = jest.fn();

      render(<Modal {...props} />);
      expect(props.onAfterOpen).toHaveBeenCalledTimes(1);
    });

    it(`should trigger the onRequestClose function when clicking the overlay`, () => {
      props.onRequestClose = jest.fn();
      props.shouldCloseOnOverlayClick = true;
      props.closeTimeoutMS = 0;

      const { driver } = render(<Modal {...props} />);
      driver.clickOnOverlay();

      expect(props.onRequestClose).toHaveBeenCalledTimes(1);
    });

    it(`should trigger the onRequestClose function when clicking the close button`, () => {
      props.onRequestClose = jest.fn();
      props.shouldDisplayCloseButton = true;
      props.closeTimeoutMS = 0;

      const { driver } = render(<Modal {...props} />);
      driver.clickOnCloseButton();

      expect(props.onRequestClose).toHaveBeenCalledTimes(1);
    });

    describe('timeout', () => {
      it(`should wait closeTimeoutMS before removing the modal`, async () => {
        props.closeTimeoutMS = 100;

        const { rerender, driver } = render(<Modal {...props} />);
        expect(driver.isOpen()).toBeTruthy();
        rerender(<Modal {...props} isOpen={false} />);

        await resolveIn(props.closeTimeoutMS - 50);
        expect(driver.isOpen()).toBeTruthy();
        await resolveIn(100);
        expect(driver.isOpen()).toBeFalsy();
      });
    });
  });

  describe('theme', () => {
    it('should set the theme by default to "blue"', () => {
      const { driver } = render(<Modal {...props} />);
      expect(driver.isThemeExist('blue')).toBeTruthy();
    });

    it('should allowing setting the theme', () => {
      props.theme = 'green';
      const { driver } = render(<Modal {...props} />);
      expect(driver.isThemeExist('green')).toBeTruthy();
      expect(driver.isThemeExist('blue')).toBeFalsy();
    });
  });

  describe('scrollable', () => {
    it('should be set to true by default', () => {
      const { driver } = render(<Modal {...props} />);
      expect(driver.isScrollable()).toBe(true);
    });
    it('should allow disabling the scrolling', () => {
      const { driver } = render(<Modal {...props} scrollable={false} />);
      expect(driver.isScrollable()).toBe(false);
    });
  });

  describe('close button', () => {
    it('should not have a close button', () => {
      props.shouldDisplayCloseButton = false;
      const { driver } = render(<Modal {...props} />);
      expect(driver.closeButtonExists()).toBe(false);
    });
    it('should have a close button', () => {
      props.shouldDisplayCloseButton = true;
      const { driver } = render(<Modal {...props} />);
      expect(driver.closeButtonExists()).toBe(true);
    });
  });

  describe('appName', () => {
    it('should add aria-hidden body if appElement is not specified', () => {
      render(<Modal {...props} />);
      expect(
        document.getElementsByTagName('body')[0].getAttribute('aria-hidden'),
      ).toBe('true');
    });

    it('should add aria-hidden to selected element', () => {
      const appElemnt = document.createElement('div');
      appElemnt.setAttribute('id', 'app');
      document.body.appendChild(appElemnt);
      props.appElement = '#app';
      render(<Modal {...props} />);
      expect(appElemnt.getAttribute('aria-hidden')).toBe('true');
    });
  });
});
