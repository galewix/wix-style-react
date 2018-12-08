import React from 'react';

import Markdown from 'wix-storybook-utils/Markdown';

import Introduction from './Introduction.md';
import FAQ from './FAQ.md';
import Roadmap from './Roadmap.md';
import IntroductionExample from './IntroductionExample';
import { linkTo } from '@storybook/addon-links';
import TextLink from 'wix-style-react/TextLink';

export default () => (
  <div>
    <Markdown source={Introduction} />
    <IntroductionExample />
    <TextLink onClick={linkTo('WIP/Drag And Drop/SortableList', 'API')}>
      {`<SortableList/>`} Docs
    </TextLink>
    <Markdown source={FAQ} />
    <Markdown source={Roadmap} />
  </div>
);
