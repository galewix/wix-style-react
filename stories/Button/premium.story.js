import Button from 'wix-style-react/Button';

import icons from './icons-for-story';

export default {
  category: '5. Buttons',
  storyName: '5.5 Premium',
  component: Button,
  componentPath: '../../src/Backoffice/Button',

  componentProps: {
    theme: 'fullpurple',
    children: 'Click Me',
  },

  exampleProps: {
    onClick: () => 'Clicked!',
    onMouseEnter: () => 'Mouse Enter!',
    onMouseLeave: () => 'Mouse Leave!',
    prefixIcon: icons,
    suffixIcon: icons,
  },
};
