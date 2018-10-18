import eyes from 'eyes.it';
import {createStoryUrl} from '../../test/utils/storybook-helpers';

import {getTestStoryKind, Category} from '../../stories/storiesHierarchy';
import {ExpectedConditions} from 'protractor';

describe('Typography', () => {
  const kind = getTestStoryKind({category: Category.FOUNDATION, storyName: '1.2 Typography'});

  eyes.it('should render all Text variations', async () => {
    const storyUrl = createStoryUrl({kind, story: '1. Typography with Classes - Text'});
    await browser.get(storyUrl);
    await browser.wait(ExpectedConditions.visibilityOf($('table')));
  });

  eyes.it('should render all Heading variations', async () => {
    const storyUrl = createStoryUrl({kind, story: '2. Typography with Classes - Heading'});
    await browser.get(storyUrl);
    await browser.wait(ExpectedConditions.visibilityOf($('table')));
  });

});
