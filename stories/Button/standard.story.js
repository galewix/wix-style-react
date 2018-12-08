import Button from 'wix-style-react/Button';

import icons from './icons-for-story';

export default {
  category: '5. Buttons',
  storyName: '5.1 Standard',
  component: Button,
  componentPath: '../../src/Backoffice/Button',

  componentProps: {
    theme: 'fullblue',
    children: 'Click Me',
    dataHook: 'storybook-button',
  },

  exampleProps: {
    onClick: () => 'Clicked!',
    onMouseEnter: () => 'Mouse Enter!',
    onMouseLeave: () => 'Mouse Leave!',
    prefixIcon: icons,
    suffixIcon: icons,
  },
};
