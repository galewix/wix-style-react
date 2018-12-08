import FullTextView from 'wix-style-react/FullTextView';

export default {
  category: '12. Other',
  storyName: '12.4 FullTextView',
  component: FullTextView,
  componentPath: '../src/FullTextView',

  componentProps: {
    children: 'Very long fancy and hardly fitting tab',
    maxWidth: '172px',
  },

  exampleProps: {
    onChange: ev => ev.hex(),
    onCancel: () => 'Cancelled',
    onConfirm: () => 'Confirmed',
  },
};
