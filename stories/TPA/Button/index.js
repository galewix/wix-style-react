import React from 'react';
import { storiesOf } from '@storybook/react';

import Markdown from 'wix-storybook-utils/Markdown';
import TabbedView from 'wix-storybook-utils/TabbedView';
import CodeExample from 'wix-storybook-utils/CodeExample';

import Example from './Example';
import ExampleRaw from '!raw-loader!./Example';
import ExampleControlled from './ExampleControlled';
import ExampleControlledRaw from '!raw-loader!./ExampleControlled';
import WixStyleDecorator from '../decorators/WixStyleDecorator';
import Readme from '../../../src/TPA/Button/README.md';
import ReadmeTestKit from '../../../src/TPA/Button/README.TESTKIT.md';

storiesOf('TPA', module)
  .addDecorator(WixStyleDecorator)
  .add('Button', () => (
    <TabbedView tabs={['API', 'TestKits']}>
      <div>
        <Markdown source={Readme} />
        <h1>Example</h1>
        <CodeExample title="Themes" code={ExampleRaw}>
          <Example />
        </CodeExample>
        <CodeExample title="Controlled" code={ExampleControlledRaw}>
          <ExampleControlled />
        </CodeExample>
      </div>
      <Markdown source={ReadmeTestKit} />
    </TabbedView>
  ));
