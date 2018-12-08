import React from 'react';

import TextLink from 'wix-style-react/TextLink';
import CodeExample from 'wix-storybook-utils/CodeExample';

import ExampleStandard from './ExampleStandard';
import ExampleStandardRaw from '!raw-loader!./ExampleStandard';

import ExampleDark from './ExampleDark';
import ExampleDarkRaw from '!raw-loader!./ExampleDark';

import * as Icons from 'wix-style-react/new-icons';

const icons = Object.values(Icons).map(icon => React.createElement(icon));

export default {
  category: '5. Buttons',
  storyName: '5.8 Text Link',
  component: TextLink,
  componentPath: '../../src/TextLink',

  componentProps: {
    dataHook: 'storybook-textlink',
    link: 'https://wix.com',
    underlineStyle: 'hover',
    children: 'Click to visit wix.com',
    theme: 'normal',
    size: 'medium',
    ellipsis: false,
  },
  exampleProps: {
    prefixIcon: icons,
    suffixIcon: icons,
  },
  examples: (
    <div>
      <CodeExample title="Standard" code={ExampleStandardRaw}>
        <ExampleStandard />
      </CodeExample>

      <CodeExample title="Dark" code={ExampleDarkRaw}>
        <ExampleDark />
      </CodeExample>
    </div>
  ),
};
