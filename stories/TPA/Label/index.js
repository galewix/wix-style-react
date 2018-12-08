import React from 'react';
import { storiesOf } from '@storybook/react';
import Markdown from 'wix-storybook-utils/Markdown';
import TabbedView from 'wix-storybook-utils/TabbedView';
import CodeExample from 'wix-storybook-utils/CodeExample';

import LabelExample, { CustomStyleLabelExample } from './LabelExample';
import LabelExampleRaw from '!raw-loader!./LabelExample';
import WixStyleDecorator from '../decorators/WixStyleDecorator';
import Readme from '../../../src/TPA/Label/README.md';
import ReadmeTestKit from '../../../src/TPA/Label/README.TESTKIT.md';

storiesOf('TPA', module)
  .addDecorator(WixStyleDecorator)
  .add('Label', () => (
    <TabbedView tabs={['API', 'TestKits']}>
      <div>
        <Markdown source={Readme} />
        <CodeExample title={'Example'} code={LabelExampleRaw}>
          <LabelExample />
        </CodeExample>
        <CodeExample title={'Custom CSS class Example'} code={LabelExampleRaw}>
          <CustomStyleLabelExample />
        </CodeExample>
      </div>
      <Markdown source={ReadmeTestKit} />
    </TabbedView>
  ));
