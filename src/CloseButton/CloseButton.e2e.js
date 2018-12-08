import { eyesItInstance } from '../../test/utils/eyes-it';
import autoExampleDriver from 'wix-storybook-utils/AutoExampleDriver';

import { createStoryUrl } from '../../test/utils/storybook-helpers';
import { storySettings } from '../../stories/CloseButton/storySettings';

describe('CloseButton', () => {
  const storyUrl = createStoryUrl({
    kind: storySettings.kind,
    story: storySettings.storyName,
  });

  beforeAll(async () => {
    await browser.get(storyUrl);
  });

  beforeEach(() => {
    return autoExampleDriver.remount();
  });

  const eyes = eyesItInstance({ enableSnapshotAtBrowserGet: false });

  eyes.it('Make a screenshoft of all CloseButton examples', () => {
    expect(true).toBeTruthy();
  });
});
