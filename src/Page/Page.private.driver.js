import { createDriverFactory } from 'wix-ui-test-utils/driver-factory';

export class PagePrivateDriver {
  constructor({ element, eventTrigger }) {
    this.element = element;
    this.eventTrigger = eventTrigger;
  }

  static fromJsxElement(jsxElement) {
    const driverFactory = ({ element, eventTrigger }) =>
      new PagePrivateDriver({ element, eventTrigger });
    return createDriverFactory(driverFactory)(jsxElement);
  }

  byDataHook(dataHook) {
    return this.element.querySelector(`[data-hook="${dataHook}"]`);
  }

  get fixedContainer() {
    return this.byDataHook('page-fixed-container');
  }

  get scrollableContainer() {
    return this.byDataHook('page-scrollable-content');
  }

  wheelOnFixedContainer(amount) {
    this.eventTrigger.wheel(this.fixedContainer, { deltaY: amount });
  }

  getScrollAmount() {
    return this.scrollableContainer.scrollTop;
  }
}
