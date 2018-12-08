import React from 'react';
import Button from 'wix-style-react/Button';
import * as Icons from 'wix-style-react/new-icons';

import icons from './icons-for-story';

export default {
  category: '5. Buttons',
  storyName: '5.7 Close',
  component: Button,
  componentPath: '../../src/Backoffice/Button',

  componentProps: {
    theme: 'close-standard',
    children: <Icons.X />,
  },

  exampleProps: {
    onClick: () => 'Clicked!',
    onMouseEnter: () => 'Mouse Enter!',
    onMouseLeave: () => 'Mouse Leave!',
    children: icons,
  },
};
