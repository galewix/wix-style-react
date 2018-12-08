import React from 'react';
import { storiesOf } from '@storybook/react';

import Markdown from 'wix-storybook-utils/Markdown';

import Readme from '../../README.md';
import UsageWithoutYoshiReadme from '../../docs/usage-without-yoshi.md';

storiesOf('Introduction', module)
  .add('Getting started', () => <Markdown source={Readme} />)
  .add('Usage Without Yoshi', () => (
    <Markdown source={UsageWithoutYoshiReadme} />
  ));

//TODO - add contriubtion docs links here somehow
