import React from 'react';
import { storiesOf } from '@storybook/react';
import InteractiveCodeExample from 'wix-storybook-utils/InteractiveCodeExample';
import Markdown from 'wix-storybook-utils/Markdown';

import ReadMe from '../../src/RichTextAreaComposite/README.md';
import RichTextAreaCompositeExample from './RichTextAreaCompositeExample';

storiesOf('3. Inputs', module).add('3.2b RichTextAreaComposite', () => (
  <div>
    <Markdown source={ReadMe} />
    <InteractiveCodeExample title="Customize a <RichTextAreaComposite/>">
      <RichTextAreaCompositeExample />
    </InteractiveCodeExample>
  </div>
));
