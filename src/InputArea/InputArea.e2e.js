import eyes from 'eyes.it';
import { inputAreaTestkitFactory } from '../../testkit/protractor';
import { waitForVisibilityOf } from 'wix-ui-test-utils/protractor';
import { createStoryUrl } from '../../test/utils/storybook-helpers';

import { storySettings } from '../../stories/InputArea/storySettings';

describe('input area page', () => {
  const storyUrl = createStoryUrl({
    kind: storySettings.category,
    story: storySettings.storyName,
    withExamples: false,
  });
  const inputAreaTestkit = inputAreaTestkitFactory({
    dataHook: 'storybook-inputarea',
  });

  beforeEach(async () => {
    await browser.get(storyUrl);
    await waitForVisibilityOf(inputAreaTestkit.element());
  });

  eyes.it('should render default props', async () => {
    expect(await inputAreaTestkit.isFocused()).toBe(false, 'isFocused');
  });

  eyes.it('should show focus styles', async () => {
    expect(await inputAreaTestkit.isFocused()).toBeFalsy();
    await browser
      .actions()
      .sendKeys(protractor.Key.TAB)
      .perform();
    expect(await inputAreaTestkit.isFocused()).toBeTruthy();
  });

  eyes.it('should show hover styles', async () => {
    expect(await inputAreaTestkit.isHovered()).toBeFalsy();
    await inputAreaTestkit.hover();
    expect(await inputAreaTestkit.isHovered()).toBeTruthy();
  });

  eyes.it('should show hover and focus styles', async () => {
    expect(await inputAreaTestkit.isHovered()).toBeFalsy();
    expect(await inputAreaTestkit.isFocused()).toBeFalsy();
    await inputAreaTestkit.click();
    expect(await inputAreaTestkit.isFocused()).toBeTruthy();
    expect(await inputAreaTestkit.isHovered()).toBeTruthy();
  });
});
