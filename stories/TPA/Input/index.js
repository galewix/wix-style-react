import React from 'react';
import { storiesOf } from '@storybook/react';
import Markdown from 'wix-storybook-utils/Markdown';
import TabbedView from 'wix-storybook-utils/TabbedView';
import CodeExample from 'wix-storybook-utils/CodeExample';

import InputExample, {
  InputValidationErrorExample,
  InputWithCustomErrorExample,
  InputWithCustomStyleExample,
} from './InputExample';
import InputExampleRaw from '!raw-loader!./InputExample';
import WixStyleDecorator from '../decorators/WixStyleDecorator';
import Readme from '../../../src/TPA/Input/README.md';
import ReadmeTestKit from '../../../src/TPA/FloatingTabs/README.TESTKIT.md';

storiesOf('TPA', module)
  .addDecorator(WixStyleDecorator)
  .add('Input', () => (
    <TabbedView tabs={['API', 'TestKits']}>
      <div>
        <Markdown source={Readme} />
        <h1>Example</h1>
        <CodeExample title="Default Input" code={InputExampleRaw}>
          <br />
          <InputExample />
          <br />
          <InputValidationErrorExample />
          <br />
          <InputWithCustomStyleExample />
          <br />
          <InputWithCustomErrorExample />
        </CodeExample>
      </div>
      <Markdown source={ReadmeTestKit} />
    </TabbedView>
  ));
