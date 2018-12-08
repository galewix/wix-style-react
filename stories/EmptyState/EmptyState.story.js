import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { storySettings } from './storySettings';

import EmptyState from '../../src/EmptyState';
import TextLink from '../../src/TextLink';
import Heading from '../../src/Heading';

import Add from '../../src/new-icons/Add';
import Download from '../../src/new-icons/Download';
import StatusComplete from '../../src/new-icons/StatusComplete';

import ImagePlaceholder from '../assets/ImagePlaceholder';

const singleAction = <TextLink prefixIcon={<Add />}>New Item</TextLink>;

const singleActionLongText = (
  <TextLink ellipsis prefixIcon={<Add />}>
    New Item with a ridiculous length name that does not fit to a single line
  </TextLink>
);

const twoActions = (
  <span>
    <span style={{ margin: '0 15px' }}>
      <TextLink prefixIcon={<Add />}>New Item</TextLink>
    </span>
    <span style={{ margin: '0 15px' }}>
      <TextLink prefixIcon={<Download />}>Import Items</TextLink>
    </span>
  </span>
);

export default {
  category: storySettings.kind,
  storyName: storySettings.storyName,

  component: EmptyState,
  componentPath: '../../src/EmptyState/EmptyState.js',

  componentProps: {
    dataHook: storySettings.dataHook,
    theme: 'page',
    title: "You don't have any items yet",
    subtitle:
      'Create your product item in an easy & fast way to display it on your site',
    image: <ImagePlaceholder />,
    children: null,
  },

  exampleProps: {
    theme: ['page', 'page-no-border', 'section'],
    image: [
      { label: 'No image', value: null },
      {
        label: 'Image URL',
        value:
          'https://static.wixstatic.com/media/c78d05b79ede429fb77c9d8ec4443b93.jpg/v1/fit/w_375,h_375/c78d05b79ede429fb77c9d8ec4443b93.jpg',
      },
      { label: 'Node', value: <ImagePlaceholder /> },
      { label: 'SVG', value: <StatusComplete size="120px" /> },
    ],
    children: [
      { label: 'No children', value: null },
      { label: 'Single action', value: singleAction },
      { label: 'Two actions', value: twoActions },
      { label: 'Single action with long text', value: singleActionLongText },
    ],
  },

  examples: (
    <div>
      <Heading appearance="H2">
        You can find more examples for components that utilize the EmptyState:
      </Heading>

      <ul>
        <li>
          <TextLink onClick={linkTo('2. Layout', '2.5 Page')}>Page</TextLink>
          <br />
        </li>
        <li>
          <TextLink onClick={linkTo('2. Layout', 'Card')}>Card</TextLink>
          <br />
        </li>
        <li>
          <TextLink onClick={linkTo('7. Tooltips', '7.2. Popover')}>
            Popover
          </TextLink>
          <br />
        </li>
        <li>
          <TextLink onClick={linkTo('9. Modals', '9.1 Alert')}>Alert</TextLink>
          <br />
        </li>
        <li>
          <TextLink onClick={linkTo('10. Tables', '10.1 Table')}>
            Table
          </TextLink>
          <br />
        </li>
      </ul>
    </div>
  ),
};
