import React from 'react';
import ImageViewer from 'wix-style-react/ImageViewer';

import CodeExample from 'wix-storybook-utils/CodeExample';

import ExampleStandard from './ExampleStandard';
import ExampleStandardRaw from '!raw-loader!./ExampleStandard';

const exampleImageUrl = [
  { label: 'No Image', value: '' },
  {
    label: 'Image',
    value:
      'https://static.wixstatic.com/media/c78d05b79ede429fb77c9d8ec4443b93.jpg/v1/fit/w_375,h_375/c78d05b79ede429fb77c9d8ec4443b93.jpg',
  },
];

export default {
  category: '3. Inputs',
  storyName: '3.10 ImageViewer',

  component: ImageViewer,
  componentPath: '../../src/ImageViewer',

  componentProps: {
    dataHook: 'story-image-viewer',
    imageUrl: exampleImageUrl[0].value,
  },

  exampleProps: {
    imageUrl: exampleImageUrl,
    onAddImage: () => 'onAddImage',
    onUpdateImage: () => 'onUpdateImage',
    onRemoveImage: () => 'onRemoveImage',
    tooltipProps: [{ label: 'from left', value: { placement: 'left' } }],
  },

  examples: (
    <CodeExample title="Standard" code={ExampleStandardRaw}>
      <ExampleStandard />
    </CodeExample>
  ),
};
