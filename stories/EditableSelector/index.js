import React from 'react';
import { storiesOf } from '@storybook/react';

import AutoDocs from 'wix-storybook-utils/AutoDocs';
import TabbedView from 'wix-storybook-utils/TabbedView';
import Markdown from 'wix-storybook-utils/Markdown';
import CodeExample from 'wix-storybook-utils/CodeExample';

import EditableSelectorSource from '!raw-loader!../../src/EditableSelector/EditableSelector';
import TestKitReadme from '../../src/EditableSelector/README.TESTKIT.md';

import CardWithEditableSelectorExample from './CardWithEditableSelector';
import CardWithEditableSelectorExampleRaw from '!raw-loader!./CardWithEditableSelector';

import PopoverWithEditableSelectorExample from './PopoverWithEditableSelector';
import PopoverhEditableSelectorExampleRaw from '!raw-loader!./PopoverWithEditableSelector';

storiesOf('11. Pickers and Selectors', module).add(
  '11.2 EditableSelector',
  () => (
    <TabbedView tabs={['API', 'TestKits']}>
      <div>
        <AutoDocs source={EditableSelectorSource} />

        <CodeExample
          title="Card With Editable Selector"
          code={CardWithEditableSelectorExampleRaw}
        >
          <CardWithEditableSelectorExample />
        </CodeExample>

        <CodeExample
          title="Popover With Editable Selector"
          code={PopoverhEditableSelectorExampleRaw}
        >
          <PopoverWithEditableSelectorExample />
        </CodeExample>
      </div>

      <Markdown source={TestKitReadme} />
    </TabbedView>
  ),
);
