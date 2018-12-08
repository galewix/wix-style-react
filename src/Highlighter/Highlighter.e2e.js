import eyes from 'eyes.it';
import { highlighterTestkitFactory } from '../../testkit/protractor';
import { getStoryUrl } from '../../test/utils/storybook-helpers';

describe('Highlighter', () => {
  const storyUrl = getStoryUrl('12. Other', 'Highlighter');
  const dataHook = 'story-highlighter';

  eyes.it('should render', () => {
    const driver = highlighterTestkitFactory({ dataHook });

    browser.get(storyUrl);

    expect(driver.getElement().isDisplayed()).toBe(true);
  });
});
