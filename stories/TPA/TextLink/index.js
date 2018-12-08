import React from 'react';
import { storiesOf } from '@storybook/react';
import Markdown from 'wix-storybook-utils/Markdown';
import TabbedView from 'wix-storybook-utils/TabbedView';
import CodeExample from 'wix-storybook-utils/CodeExample';

import Example from './Example';
import ExampleRaw from '!raw-loader!./Example';
import CustomExample from './CustomExample';
import CustomExampleRaw from '!raw-loader!./CustomExample';
import WixStyleDecorator from '../decorators/WixStyleDecorator';
import Readme from '../../../src/TPA/TextLink/README.md';
import ReadmeTestKit from '../../../src/TPA/TextLink/README.TESTKIT.md';

storiesOf('TPA', module)
  .addDecorator(WixStyleDecorator)
  .add('TextLink', () => (
    <TabbedView tabs={['API', 'TestKits']}>
      <div>
        <Markdown source={Readme} />
        <CodeExample title={'Example'} code={ExampleRaw}>
          <Example />
        </CodeExample>
        <CodeExample title={'Customized example'} code={CustomExampleRaw}>
          <CustomExample />
        </CodeExample>
      </div>
      <Markdown source={ReadmeTestKit} />
    </TabbedView>
  ));
