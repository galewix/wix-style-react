// We can add here constants for the Storybook category names

// Root Level
export const TESTS_PREFIX = 'Tests';

export const getTestStoryKind = ({category, storyName}) => `${TESTS_PREFIX}/${category}/${storyName}`;

export const Category = {
  FOUNDATION: '1. Foundation',
  COMPONENTS: 'Components',
  STYLING: 'Styling'
};
