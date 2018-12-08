import Loader from 'wix-style-react/Loader';

export default {
  category: '1. Foundation',
  storyName: '1.5 Loader',

  component: Loader,
  componentPath: '../src/Loader',

  componentProps: {
    dataHook: 'storybook-loader',
    status: 'loading',
    statusMessage: 'some message here',
    text: '',
  },
};
