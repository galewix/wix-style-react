import React from 'react';
import { storiesOf } from '@storybook/react';
import InteractiveCodeExample from 'wix-storybook-utils/InteractiveCodeExample';
import Markdown from 'wix-storybook-utils/Markdown';

import Readme from '../../src/Composite/FieldWithSelectionComposite/README.md';
import ExampleStandard from './ExampleStandard';
import FieldWithSelectionTemplate from './FieldWithSelectionTemplate';
import storySettings from './StorySettings';

storiesOf(storySettings.kind, module).add(storySettings.storyName, () => (
  <div>
    <Markdown source={Readme} />

    <InteractiveCodeExample title="Customize a <FieldWithSelection/>">
      <ExampleStandard />
    </InteractiveCodeExample>
    <hr />
    <div>Field with Dropdown</div>
    <FieldWithSelectionTemplate
      dataHook={storySettings.dataHookExampleDropdown}
      onChange={() => {}}
      selectionInput="dropdown"
    />
  </div>
));
