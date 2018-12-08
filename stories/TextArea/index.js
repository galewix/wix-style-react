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

import { storySettings } from './storySettings';

import ExampleBasic from './ExampleBasic';
import ExampleBasicRaw from '!raw-loader!./ExampleBasic';

import ExampleStates from './ExampleStates';
import ExampleStatesRaw from '!raw-loader!./ExampleStates';

import ExampleHeight from './ExampleHeight';
import ExampleHeightRaw from '!raw-loader!./ExampleHeight';

storiesOf(storySettings.category, module).add(storySettings.storyName, () => (
  <div>
    <Title>3.2a Text Area</Title>
    <SubTitle>Text Area let users enter and edit multiline text</SubTitle>
    <IncludedComponents componentNames={['FormField', 'InputArea']} />
    <TLDRSection>
      <CodeExample title="Text Area" code={ExampleBasicRaw}>
        <Layout>
          <Cell span={4}>
            <ExampleBasic />
          </Cell>
        </Layout>
      </CodeExample>
    </TLDRSection>
    <ExamplesSection>
      <CodeExample title="States" code={ExampleStatesRaw}>
        <ExampleStates />
      </CodeExample>
      <CodeExample title="Height" code={ExampleHeightRaw}>
        <ExampleHeight />
      </CodeExample>
    </ExamplesSection>
  </div>
));
