import React from 'react';

import ButtonLayout from 'wix-style-react/ButtonLayout';

const children = (
  <a
    href="http://www.wix.com"
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: 'inherit' }}
  >
    Link Like Button
  </a>
);

export default {
  category: '5. Buttons',
  storyName: '5.0 ButtonLayout',
  component: ButtonLayout,
  componentPath: '../src/ButtonLayout',
  componentProps: {
    children,
    theme: 'fullblue',
    height: 'medium',
  },

  exampleProps: {
    children: [
      { label: 'anchor element', value: children },
      { label: 'text in span', value: <span>text in span</span> },
    ],
  },
};
