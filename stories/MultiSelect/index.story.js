import React from 'react';
import queryString from 'query-string';
import CodeExample from 'wix-storybook-utils/CodeExample';
import MultiSelect from '../../src/MultiSelect';

import ExampleStandard from './ExampleStandard';
import ExampleStandardRaw from '!raw-loader!./ExampleStandard';
import ExampleWithLimitedNumRows from './ExampleWithLimitedNumRows';
import ExampleWithLimitedNumRowsRaw from '!raw-loader!./ExampleWithLimitedNumRows';
import ExampleWithoutOptions from './ExampleWithoutOptions';
import ExampleWithoutOptionsRaw from '!raw-loader!./ExampleWithoutOptions';
import ExampleReadOnly from './ExampleReadOnly';
import ExampleReadOnlyRaw from '!raw-loader!./ExampleReadOnly';
import ExampleReadOnlyWithError from './ExampleReadOnlyWithError';
import ExampleReadOnlyWithErrorRaw from '!raw-loader!./ExampleReadOnlyWithError';
import ExampleReorderable from './ExampleReorderable';
import ExampleReorderableRaw from '!raw-loader!./ExampleReorderable';

import styles from './story.scss';
import { storySettings } from './storySettings';
import { AutoExampleWrapper } from '../AutoExampleWrapper';

const options = [
  { value: 'Alabama', id: 'Alabama' },
  { value: 'Alaska', id: 'Alaska' },
  {
    value: (
      <div className={styles.option}>
        <div>Arizona</div>
        <div className={styles.thumb} />
      </div>
    ),
    id: 'Arizona',
    tag: { label: 'Arizona', thumb: <div className={styles.thumb} /> },
  },
  { value: 'Arkansas', id: 'Arkansas', tag: { label: 'Ark.' } },
  { value: 'California', id: 'California' },
  { value: 'California2', id: 'California2' },
  { value: 'California3', id: 'California3' },
  { value: 'California4', id: 'California4' },
  { value: 'California5', id: 'California5' },
  { value: 'California6', id: 'California6' },
  { value: 'California7', id: 'California7' },
  { value: 'Two words', id: 'Two words' },
];

const valueParser = option => (option.tag ? option.tag.label : option.value);

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,
  component: MultiSelect,
  componentPath: '../../src/MultiSelect',
  componentWrapper: AutoExampleWrapper,
  componentProps: (setState, getState) => ({
    dataHook: storySettings.dataHook,
    value: '',
    tags: [],
    options,

    predicate: option => {
      return valueParser(option)
        .toLowerCase()
        .includes(getState().value.toLowerCase());
    },

    valueParser,

    onChange: e => setState({ value: e.target.value }),

    onSelect: tags => {
      Array.isArray(tags)
        ? setState({ tags: [...getState().tags, ...tags] })
        : setState({ tags: [...getState().tags, tags] });
    },

    onRemoveTag: tagId =>
      setState({
        tags: getState().tags.filter(currTag => currTag.id !== tagId),
      }),
  }),

  examples: (
    <div>
      <h1>Examples</h1>

      <CodeExample title="Standard" code={ExampleStandardRaw}>
        <div style={{ maxWidth: 720 }}>
          <ExampleStandard />
        </div>
      </CodeExample>

      <CodeExample title="Reorderable" code={ExampleReorderableRaw}>
        <div style={{ maxWidth: 720 }}>
          <ExampleReorderable />
        </div>
      </CodeExample>

      <CodeExample title="Limited num rows" code={ExampleWithLimitedNumRowsRaw}>
        <div style={{ maxWidth: 720 }}>
          <ExampleWithLimitedNumRows />
        </div>
      </CodeExample>

      <CodeExample title="Read Only with Arrow" code={ExampleReadOnlyRaw}>
        <div style={{ maxWidth: 720 }}>
          <ExampleReadOnly />
        </div>
      </CodeExample>

      <CodeExample
        title="Read Only with Error message"
        code={ExampleReadOnlyWithErrorRaw}
      >
        <div style={{ maxWidth: 720 }}>
          <ExampleReadOnlyWithError />
        </div>
      </CodeExample>

      <CodeExample
        title="Without options & with Error"
        code={ExampleWithoutOptionsRaw}
      >
        <div style={{ maxWidth: 720 }}>
          <ExampleWithoutOptions />
        </div>
      </CodeExample>
    </div>
  ),
};
