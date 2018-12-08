import React from 'react';
import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';

import TextLink from 'wix-style-react/TextLink';
import Markdown from 'wix-storybook-utils/Markdown';
import TabbedView from 'wix-storybook-utils/TabbedView';

import LiveCodeExample from '../utils/Components/LiveCodeExample';

import ExampleRaw from '!raw-loader!./Example';

storiesOf('4. Selection', module).add('4.1 Dropdown', () => (
  <TabbedView tabs={['Usage']}>
    <div>
      <Markdown
        source={`
# 4.1 Dropdown

## Included components
          `}
      />

      <lu>
        <li>
          <TextLink
            onClick={linkTo('Components', 'Dropdown')}
          >{`<Dropdown/>`}</TextLink>
        </li>
        <li>
          <TextLink
            onClick={linkTo('Components', 'FormField')}
          >{`<FormField/>`}</TextLink>
        </li>
      </lu>

      <Markdown source={`## Examples`} />

      <div style={{ maxWidth: 520 }}>
        <LiveCodeExample
          compact
          title="Dropdown within a FormField"
          initialCode={ExampleRaw}
        />
      </div>
    </div>
  </TabbedView>
));
