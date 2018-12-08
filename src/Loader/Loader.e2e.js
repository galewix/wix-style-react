import eyes from 'eyes.it';
import { loaderTestkitFactory } from '../../testkit/protractor';
import { waitForVisibilityOf } from 'wix-ui-test-utils/protractor';
import { getStoryUrl } from '../../test/utils/storybook-helpers';
import { disableCSSAnimation } from '../../test/utils/protractor-helpers';
import autoExampleDriver from 'wix-storybook-utils/AutoExampleDriver';
import { ExpectedConditions as EC } from 'protractor';

describe('Loader', () => {
  const storyUrl = getStoryUrl('1. Foundation', '1.5 Loader');
  const loaderDriver = loaderTestkitFactory({ dataHook: 'storybook-loader' });

  beforeAll(() => {
    browser.get(storyUrl);
    browser.executeScript(disableCSSAnimation);
  });

  beforeEach(() => {
    autoExampleDriver.reset();
  });

  eyes.it('should render given valid props', async () => {
    autoExampleDriver.setProps({
      size: 'large',
      color: 'white',
      text: 'Wubba Lubba Dub Dub',
    });

    await waitForVisibilityOf(loaderDriver.element(), 'Cannot find <Loader/>');
    expect(loaderDriver.isLarge()).toBe(true);
    expect(loaderDriver.getColor()).toBe('white');
    expect(loaderDriver.hasText()).toBe(true);
    expect(loaderDriver.getText()).toBe('WUBBA LUBBA DUB DUB');
  });

  eyes.it('should render different Loader sizes', async () => {
    autoExampleDriver.setProps({ size: 'tiny' });
    await waitForVisibilityOf(loaderDriver.element(), 'Cannot find <Loader/>');

    await eyes.checkWindow('tiny loader');

    expect(loaderDriver.isTiny()).toBe(true);

    autoExampleDriver.setProps({ size: 'small' });
    await waitForVisibilityOf(loaderDriver.element(), 'Cannot find <Loader/>');

    await eyes.checkWindow('small loader');

    expect(loaderDriver.isSmall()).toBe(true);

    autoExampleDriver.setProps({ size: 'medium' });
    await waitForVisibilityOf(loaderDriver.element(), 'Cannot find <Loader/>');

    await eyes.checkWindow('medium loader');

    expect(loaderDriver.isMedium()).toBe(true);

    autoExampleDriver.setProps({ size: 'large' });
    await waitForVisibilityOf(loaderDriver.element(), 'Cannot find <Loader/>');

    await eyes.checkWindow('large loader');

    expect(loaderDriver.isLarge()).toBe(true);
  });

  eyes.it('should render different loader colors', async () => {
    autoExampleDriver.setProps({ color: 'blue' });

    await waitForVisibilityOf(loaderDriver.element(), 'Cannot find <Loader/>');

    await eyes.checkWindow('blue loader');

    expect(loaderDriver.getColor()).toBe('blue');

    autoExampleDriver.setProps({ color: 'white' });

    await waitForVisibilityOf(loaderDriver.element(), 'Cannot find <Loader/>');

    await eyes.checkWindow('white loader');

    expect(loaderDriver.getColor()).toBe('white');
  });

  eyes.it('should render different loader status', async () => {
    autoExampleDriver.setProps({ status: 'loading' });
    await browser.wait(EC.and(loaderDriver.isLoading));
    await eyes.checkWindow('loading status');

    autoExampleDriver.setProps({ status: 'error' });
    await browser.wait(EC.and(loaderDriver.isError));
    await eyes.checkWindow('error status');

    autoExampleDriver.setProps({ status: 'success' });
    await browser.wait(EC.and(loaderDriver.isSuccess));
    await eyes.checkWindow('success status');
  });
});
