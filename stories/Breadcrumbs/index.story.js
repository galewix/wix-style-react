import React from 'react';
import CodeExample from 'wix-storybook-utils/CodeExample';
import Breadcrumbs from 'wix-style-react/Breadcrumbs';

import ExampleStandardRow from '!raw-loader!../Breadcrumbs/ExampleStandard';
import ExampleStandard from './ExampleStandard';

import ExampleSizesRow from '!raw-loader!../Breadcrumbs/ExampleSizes';
import ExampleSizes from './ExampleSizes';

import ExampleThemesRow from '!raw-loader!../Breadcrumbs/ExampleThemes';
import ExampleThemes from './ExampleThemes';

import ExampleWithOnClickRow from '!raw-loader!../Breadcrumbs/ExampleWithOnClick';
import ExampleWithOnClick from './ExampleWithOnClick';

import ExampleWithChosenActiveElementRaw from '!raw-loader!../Breadcrumbs/ExampleWithChosenActiveElement';
import ExampleWithChosenActiveElement from './ExampleWithChosenActiveElement';

import ExampleUsingURLRaw from '!raw-loader!../Breadcrumbs/ExampleUsingURL';
import ExampleUsingURL from './ExampleUsingURL';

const items = [
  {
    id: '1',
    value: 'First item',
  },
  {
    id: '2',
    link: 'http://www.wix.com',
    value: 'Linked item',
  },
  {
    id: '3',
    value: 'Third item',
  },
];

export default {
  category: '6. Navigation',
  storyName: '6.2 Breadcrumbs',
  component: Breadcrumbs,
  componentPath: './../../src/Breadcrumbs',
  componentProps: {
    activeId: '1',
    items,
    size: 'medium',
  },
  exampleProps: {
    activeId: ['1', '2', '3'],
    items: [
      { label: 'One item', value: [{ id: 0, value: 'Homepage' }] },
      { label: 'Three items', value: items },
    ],
  },
  examples: (
    <div>
      <CodeExample title="Standard" code={ExampleStandardRow}>
        <ExampleStandard />
      </CodeExample>

      <CodeExample title="Sizes" code={ExampleSizesRow}>
        <ExampleSizes />
      </CodeExample>

      <CodeExample title="Example using path factory" code={ExampleUsingURLRaw}>
        <ExampleUsingURL />
      </CodeExample>

      <CodeExample title="Themes" code={ExampleThemesRow}>
        <ExampleThemes />
      </CodeExample>

      <CodeExample title="On click callback" code={ExampleWithOnClickRow}>
        <ExampleWithOnClick />
      </CodeExample>

      <CodeExample
        title="Chosen active element"
        code={ExampleWithChosenActiveElementRaw}
      >
        <ExampleWithChosenActiveElement />
      </CodeExample>
    </div>
  ),
};
