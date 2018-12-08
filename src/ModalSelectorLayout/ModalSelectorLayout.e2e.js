import { modalSelectorLayoutTestkitFactory } from '../../testkit/protractor';
import { waitForVisibilityOf } from 'wix-ui-test-utils/protractor';
import { getStoryUrl } from '../../test/utils/storybook-helpers';
import autoExampleDriver from 'wix-storybook-utils/AutoExampleDriver';

describe('ModalSelectorLayout', () => {
  const storyUrl = getStoryUrl(
    '11. Pickers and Selectors',
    '11.3 ModalSelectorLayout',
  );
  const modalSelectorLayoutDriver = modalSelectorLayoutTestkitFactory({
    dataHook: 'storybook-modal-selector-layout',
  });

  beforeAll(() => {
    browser.get(storyUrl);
  });

  afterEach(() => {
    autoExampleDriver.reset();
  });

  it('should render defaults', () => {
    autoExampleDriver.setProps({
      size: 'large',
      color: 'white',
      text: 'Wubba Lubba Dub Dub',
    });

    waitForVisibilityOf(
      modalSelectorLayoutDriver.element(),
      'Cannot find <ModalSelectorLayout/>',
    ).then(() => {
      expect(modalSelectorLayoutDriver.element().isDisplayed()).toBe(true);
      expect(modalSelectorLayoutDriver.getTitle()).toBe('Choose Your Items');
    });
  });
});
