import React from 'react';
import { storiesOf } from '@storybook/react';
import Markdown from 'wix-storybook-utils/Markdown';
import InteractiveCodeExample from 'wix-storybook-utils/InteractiveCodeExample';
import GoogleAPILoader from '../utils/Components/GoogleAPILoader';

import Readme from '../../src/GoogleAddressInputWithLabel/README.md';
import ExampleStandard from './ExampleStandard';

storiesOf('4. Selection', module).add('4.8 Google address input', () => (
  <GoogleAPILoader>
    <Markdown source={Readme} />

    <InteractiveCodeExample title="Customize a <GoogleAddressInputWithLabel/>">
      <ExampleStandard />
    </InteractiveCodeExample>
  </GoogleAPILoader>
));
