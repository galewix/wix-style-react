import { TESTS_PREFIX } from '../../stories/storiesHierarchy';

import { getStoryUrl, createStoryUrl } from 'wix-ui-test-utils/protractor';

export { getStoryUrl, createStoryUrl };

export const createTestStoryUrl = ({ testName, category, storyName }) => {
  return createStoryUrl({
    kind: `${TESTS_PREFIX}/${category}/${storyName}`,
    story: testName,
  });
};
