import eyes from 'eyes.it';
import { sectionHelperTestkitFactory } from '../../testkit/protractor';
import { waitForVisibilityOf } from 'wix-ui-test-utils/protractor';
import { createStoryUrl } from '../../test/utils/storybook-helpers';
import { storybookConfig } from '../../stories/SectionHelper/storybookConfig';

describe('SectionHelper', () => {
  const storyUrl = createStoryUrl({
    kind: storybookConfig.category,
    story: storybookConfig.storyName,
    withExamples: false,
  });
  const testkit = sectionHelperTestkitFactory({
    dataHook: 'storybook-sectionhelper',
  });

  eyes.it('should render default props', async () => {
    await browser.get(storyUrl);
    await waitForVisibilityOf(testkit.element());
  });
});
