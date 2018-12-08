import React from 'react';
import { storiesOf } from '@storybook/react';

import CodeExample from 'wix-storybook-utils/CodeExample';
import {
  Title,
  IncludedComponents,
  SubTitle,
  TLDRSection,
  ExamplesSection,
} from '../UXStoryTemplate';
import { Layout, Cell } from 'wix-style-react/Layout';

import { Category } from '../storiesHierarchy';

import ExampleBasic from './ExampleBasic';
import ExampleBasicRaw from '!raw-loader!./ExampleBasic';

import ExampleSizes from './ExampleSizes';
import ExampleSizesRaw from '!raw-loader!./ExampleSizes';

import ExampleAdornments from './ExampleAdornments';
import ExampleAdornmentsRaw from '!raw-loader!./ExampleAdornments';

storiesOf(Category.INPUTS, module).add('3.1 Text Field', () => (
  <div>
    <Title>3.1 Text Field</Title>
    <SubTitle>TextField let users enter and edit text.</SubTitle>
    <IncludedComponents componentNames={['FormField', 'Input']} />
    <TLDRSection>
      <CodeExample title="Text Field" code={ExampleBasicRaw}>
        <Layout>
          <Cell span={4}>
            <ExampleBasic />
          </Cell>
        </Layout>
      </CodeExample>
    </TLDRSection>
    <ExamplesSection>
      <CodeExample title="Sizes" code={ExampleSizesRaw}>
        <ExampleSizes />
      </CodeExample>
      <CodeExample title="Adornments" code={ExampleAdornmentsRaw}>
        <ExampleAdornments />
      </CodeExample>
    </ExamplesSection>
  </div>
));
