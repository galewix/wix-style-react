// We can add here constants for the Storybook category names

// Root Level
export const TESTS_PREFIX = 'Tests';

export const getTestStoryKind = ({ category, storyName }) =>
  `${TESTS_PREFIX}/${category}/${storyName}`;

export const Category = {
  FOUNDATION: '1. Foundation',
  INPUTS: '3. Inputs',
  OTHER: '12. Other',
  COMPONENTS: 'Components',
  STYLING: 'Styling',
  WIP: 'WIP',
};
