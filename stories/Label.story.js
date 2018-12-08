import Label from 'wix-style-react/Label';

const SIZES = ['small', 'medium'];

export default {
  category: '1. Foundation',
  storyName: '1.2 + Label',

  component: Label,
  componentPath: '../src/Label',

  componentProps: {
    children: 'Some label',
    size: 'medium',
    dataHook: 'storybook-label',
  },

  exampleProps: {
    size: SIZES,
  },
};
