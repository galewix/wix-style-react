import React from 'react';
import {storiesOf} from '@storybook/react';
import {linkTo} from '@storybook/addon-links';
import Markdown from 'wix-storybook-utils/Markdown';
import CodeExample from 'wix-storybook-utils/CodeExample';

import TextLink from 'wix-style-react/TextLink';
import ExampleSnippet from './Example';
import ExampleRaw from '!raw-loader!./Example';

storiesOf('4. Selection', module)
  .add('4.1 Dropdown', () => (
    <div>
      <Markdown
        source={`
# 4.1 Dropdown

## Included components
`}
        />
      <lu>
        <li>
          <TextLink onClick={linkTo('Components', 'Dropdown')}>{`<Dropdown/>`}</TextLink>
        </li>
        <li>
          <TextLink onClick={linkTo('Components', 'FormField')}>{`<FormField/>`}</TextLink>
        </li>
      </lu>
      <Markdown
        source={`
## Examples
`}
        />
      <CodeExample
        title="Dropdown"
        code={ExampleRaw}

        autoExpand
        >
        <ExampleSnippet/>
      </CodeExample>
    </div>
    )
  );
