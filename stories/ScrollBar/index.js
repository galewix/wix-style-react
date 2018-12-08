import React from 'react';
import { storiesOf } from '@storybook/react';
import Markdown from 'wix-storybook-utils/Markdown';

import Readme from './Readme.md';
import ExampleStandard from './ExampleStandard';

storiesOf('1. Foundation', module).add('1.8 ScrollBar', () => (
  <div className="markdown-body">
    <Markdown source={Readme} />
    <h2>Example of scroll mixin usage</h2>
    <ExampleStandard />
  </div>
));
