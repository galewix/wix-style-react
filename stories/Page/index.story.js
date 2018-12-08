import React from 'react';
import CodeExample from 'wix-storybook-utils/CodeExample';
import Page from 'wix-style-react/Page';
import Breadcrumbs from './Breadcrumbs';
import { storySettings } from './storySettings';

import { header, tail, fixedContent, content } from './PageChildren';
import './Page.scss';

import ExampleEmptyState from './ExampleEmptyState';
import ExampleEmptyStateRaw from '!raw-loader!./ExampleEmptyState';

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,
  name: 'Page',
  component: Page,
  componentPath: '../../src/Page',

  componentProps: {
    children: [header(Breadcrumbs), tail, content(false)],
    dataHook: 'story-page',
    gradientClassName: 'background-gradient',
    gradientCoverTail: true,
    backgroundImageUrl:
      'https://static.wixstatic.com/media/f0548921c53940ec803dfb1c203e96fe.jpg/v1/fill/w_400,h_100/f0548921c53940ec803dfb1c203e96fe.jpg',
  },

  exampleProps: {
    children: [
      {
        label: 'header, tail & content',
        value: [header(Breadcrumbs), tail, content(false)],
      },
      {
        label: 'header & content',
        value: [header(Breadcrumbs), content(false)],
      },
      {
        label: 'just content',
        value: [content(false)],
      },
      {
        label: 'header, tail, fixed-content & content',
        value: [header(Breadcrumbs), tail, fixedContent, content(false)],
      },
    ],
    backgroundImageUrl: [
      {
        label: 'https://some-host.com/image-path.jpg',
        value:
          'https://static.wixstatic.com/media/f0548921c53940ec803dfb1c203e96fe.jpg/v1/fill/w_400,h_100/f0548921c53940ec803dfb1c203e96fe.jpg',
      },
    ],
  },

  examples: (
    <CodeExample title="Page with and EmptyState" code={ExampleEmptyStateRaw}>
      <ExampleEmptyState />
    </CodeExample>
  ),
};
