
import React from 'react';
import {storiesOf} from '@storybook/react';

import Markdown from 'wix-storybook-utils/Markdown';
import {Category} from '../storiesHierarchy';
import {Title, SubTitle, StoryLink} from '../UXStoryTemplate';

import styles from './styles.scss';
import CodeExample from 'wix-storybook-utils/CodeExample';

import BasicClassesExample from './BasicClassesExample';
import BasicClassesExampleRaw from '!raw-loader!./BasicClassesExample';

import BasicClassesSassExampleRaw from '!raw-loader!./BasicClassesSassExample.md';

import TypographyClassesTableRaw from '!raw-loader!./TypographyClassesTable.md';


storiesOf(Category.STYLING, module)
  .add('1.2 Typography Classes', () => {
    return (
      <div>
        <Title>1.2 Typography Classes</Title>
        <SubTitle>Typography Components</SubTitle>
        <Markdown
          source={
`
The recommended way to use Wix-Style-React typography is via components: \`<Text/>\` and \`<Heading/>\`.<br/>
Using these components gives you also ellipsis with tooptip.<br/>
`}
          />
        <p>
          See <StoryLink kind={Category.FOUNDATION} story="1.2 Typography"/>
        </p>
        <SubTitle>Typography Classes</SubTitle>
        <Markdown
          source={
`
In case the \`<Text/>\` and \`<Heading/>\` components do not suit your need, you can use the Typography classes directly.
> Note: some styles are available only by using typography CSS classes (like link and disabled text colors)
`}
          />
        <CodeExample
          title="Basic Example (JS)"
          code={BasicClassesExampleRaw}
          autoExpand
          >
          <div className={styles.codeExample}>
            <BasicClassesExample/>
          </div>
        </CodeExample>

        {/* <CodeExample
          title="Basic Example (Sass)"
          code={BasicClassesSassExampleRaw}
          >
          <div className={styles.codeExample}>
            <BasicClassesSassExample/>
          </div>
        </CodeExample> */}
        <Markdown source={BasicClassesSassExampleRaw}/>
        <Markdown source={TypographyClassesTableRaw}/>
      </div>

    );
  }
);

