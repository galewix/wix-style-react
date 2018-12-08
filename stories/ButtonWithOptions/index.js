import React from 'react';
import { storiesOf } from '@storybook/react';
import Markdown from 'wix-storybook-utils/Markdown';
import TabbedView from 'wix-storybook-utils/TabbedView';
import InteractiveCodeExample from 'wix-storybook-utils/InteractiveCodeExample';

import Readme from '../../src/ButtonWithOptions/README.md';
import ExampleStandardComp from './ButtonWithOptionsStandard';
import ReadmeTestkit from '../../src/ButtonWithOptions/README.TESTKIT.md';

storiesOf('4. Selection', module).add('4.1 + ButtonWithOptions', () => (
  <TabbedView tabs={['API', 'Testkit']}>
    <div>
      <Markdown source={Readme} />

      <InteractiveCodeExample title="Customize a <ButtonWithOptions/>">
        <ExampleStandardComp />
      </InteractiveCodeExample>
    </div>

    <Markdown source={ReadmeTestkit} />
  </TabbedView>
));
