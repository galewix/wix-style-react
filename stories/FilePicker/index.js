import React from 'react';
import { storiesOf } from '@storybook/react';
import Markdown from 'wix-storybook-utils/Markdown';
import AutoDocs from 'wix-storybook-utils/AutoDocs';
import TabbedView from 'wix-storybook-utils/TabbedView';
import CodeExample from 'wix-storybook-utils/CodeExample';

import FilePickerSource from '!raw-loader!wix-style-react/FilePicker/FilePicker';
import ReadmeTestKit from '../../src/FilePicker/README.TESTKIT.md';

import Example from './Example';
import ExampleRaw from '!raw-loader!./Example';

storiesOf('3. Inputs', module).add('3.10 + FilePicker', () => (
  <TabbedView tabs={['API', 'TestKits']}>
    <div>
      <AutoDocs source={FilePickerSource} />

      <h1>Usage examples</h1>

      <CodeExample title="Standard" code={ExampleRaw}>
        <Example />
      </CodeExample>
    </div>

    <Markdown source={ReadmeTestKit} />
  </TabbedView>
));
