import React from 'react';
import { storiesOf } from '@storybook/react';
import TabbedView from 'wix-storybook-utils/TabbedView';
import Markdown from 'wix-storybook-utils/Markdown';
import CodeExample from 'wix-storybook-utils/CodeExample';

import Readme from '../../src/IconWithOptions/README.md';
import ReadmeTestkit from '../../src/IconWithOptions/README.TESTKIT.md';

import Example from './Example';
import ExampleRaw from '!raw-loader!./Example';

storiesOf('4. Selection', module).add('4.1 + IconWithOptions', () => (
  <TabbedView tabs={['API', 'Testkit']}>
    <div>
      <Markdown source={Readme} />

      <CodeExample title="Example" code={ExampleRaw}>
        <Example />
      </CodeExample>
    </div>

    <Markdown source={ReadmeTestkit} />
  </TabbedView>
));
