import React from 'react';
import { storiesOf } from '@storybook/react';

import Badge from 'wix-style-react/Badge';
import Markdown from 'wix-storybook-utils/Markdown';
import WIP from './WIP.md';

storiesOf('WIP', module).add('What is this?', () => (
  <div>
    <Badge skin="danger">UNDER DEVELOPMENT</Badge>
    <Markdown source={WIP} />
  </div>
));
