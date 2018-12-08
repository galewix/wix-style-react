import eyes from 'eyes.it';
import { imageViewerTestkitFactory } from '../../testkit/protractor';
import { waitForVisibilityOf } from 'wix-ui-test-utils/protractor';
import { getStoryUrl } from '../../test/utils/storybook-helpers';
import autoExampleDriver from 'wix-storybook-utils/AutoExampleDriver';

describe('ImageViewer', () => {
  const storyUrl = getStoryUrl('3. Inputs', '3.10 ImageViewer');
  const driver = imageViewerTestkitFactory({ dataHook: 'story-image-viewer' });

  beforeAll(async () => {
    await browser.get(storyUrl);
  });

  afterEach(() => autoExampleDriver.reset());

  eyes.it('should render', async () => {
    await waitForVisibilityOf(driver.element(), 'Cannot find ImageViewer');
  });

  eyes.it('should render with an image', async () => {
    await waitForVisibilityOf(driver.element(), 'Cannot find ImageViewer');
    await autoExampleDriver.setProps({
      imageUrl:
        'https://static.wixstatic.com/media/c78d05b79ede429fb77c9d8ec4443b93.jpg/v1/fit/w_375,h_375/c78d05b79ede429fb77c9d8ec4443b93.jpg',
    });
  });

  eyes.it('should render with an error', async () => {
    await waitForVisibilityOf(driver.element(), 'Cannot find ImageViewer');
    await autoExampleDriver.setProps({ error: true });
  });
});
