import React from 'react';
import * as PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';

import Page from 'wix-style-react/Page';
import { getTestStoryKind } from '../storiesHierarchy';

import Breadcrumbs from './Breadcrumbs';
import * as s from './PageExample.scss';
import { header, fixedContent, content } from './PageChildren';
import { storySettings } from './storySettings';

const PageContainer = props => {
  return <div className={s.pageContainer}>{props.children}</div>;
};
PageContainer.propTypes = {
  children: PropTypes.any,
};

const kind = getTestStoryKind(storySettings);
const dataHook = 'story-page';

storiesOf(kind, module).add('1. Image', () => (
  <PageContainer>
    <Page
      dataHook={dataHook}
      children={[header(Breadcrumbs), content(false)]}
      backgroundImageUrl="https://static.wixstatic.com/media/f0548921c53940ec803dfb1c203e96fe.jpg/v1/fill/w_400,h_100/f0548921c53940ec803dfb1c203e96fe.jpg"
    />
  </PageContainer>
));

storiesOf(kind, module).add('2. Gradient', () => (
  <PageContainer>
    <Page
      dataHook={dataHook}
      children={[header(Breadcrumbs), content(false)]}
      gradientClassName="background-gradient"
    />
  </PageContainer>
));

storiesOf(kind, module).add('3. FC-Image', () => (
  <PageContainer>
    <Page
      dataHook={dataHook}
      children={[header(Breadcrumbs), fixedContent, content(false)]}
      backgroundImageUrl="https://static.wixstatic.com/media/f0548921c53940ec803dfb1c203e96fe.jpg/v1/fill/w_400,h_100/f0548921c53940ec803dfb1c203e96fe.jpg"
    />
  </PageContainer>
));

storiesOf(kind, module).add('4. FC-Gradient', () => (
  <PageContainer>
    <Page
      dataHook={dataHook}
      children={[header(Breadcrumbs), fixedContent, content(false)]}
      gradientClassName="background-gradient"
    />
  </PageContainer>
));
