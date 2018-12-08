import React from 'react';
import { storiesOf } from '@storybook/react';
import InteractiveCodeExample from 'wix-storybook-utils/InteractiveCodeExample';
import Markdown from 'wix-storybook-utils/Markdown';

import Readme from '../../src/Notification/README.md';
import ExampleStandard from './ExampleStandard';

storiesOf('8. Notification Bars', module)
  .add('8.1 Standard', () => (
    <div>
      <Markdown source={Readme} />
      <InteractiveCodeExample title="Customize a <Notification/>">
        <ExampleStandard theme="standard" />
      </InteractiveCodeExample>
    </div>
  ))

  .add('8.2 Error', () => (
    <div>
      <Markdown source={Readme} />
      <InteractiveCodeExample title="Customize a <Notification/>">
        <ExampleStandard theme="error" />
      </InteractiveCodeExample>
    </div>
  ))

  .add('8.3 Success', () => (
    <div>
      <Markdown source={Readme} />
      <InteractiveCodeExample title="Customize a <Notification/>">
        <ExampleStandard theme="success" />
      </InteractiveCodeExample>
    </div>
  ))

  .add('8.4 Warning', () => (
    <div>
      <Markdown source={Readme} />
      <InteractiveCodeExample title="Customize a <Notification/>">
        <ExampleStandard theme="warning" />
      </InteractiveCodeExample>
    </div>
  ))

  .add('8.5 Premium', () => (
    <div>
      <Markdown source={Readme} />
      <InteractiveCodeExample title="Customize a <Notification/>">
        <ExampleStandard theme="premium" />
      </InteractiveCodeExample>
    </div>
  ));
