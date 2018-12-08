import React from 'react';
import * as PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';

import { storySettings } from './storySettings';
import PageHeader from 'wix-style-react/PageHeader';
import { getTestStoryKind } from '../storiesHierarchy';
import Button from 'wix-style-react/Button';

const PageHeaderContainer = props => {
  return (
    <div style={{ width: '700px', border: '1px solid' }}>{props.children}</div>
  );
};
PageHeaderContainer.propTypes = {
  children: PropTypes.any,
};

const kind = getTestStoryKind(storySettings);
const dataHook = 'story-page-header';

storiesOf(kind, module).add('1. Long Title and Subtitle', () => (
  <PageHeaderContainer>
    <PageHeader
      dataHook={dataHook}
      title="PageHeader title - very very long very very long very very long very very long very very long"
      subtitle="PageHeader subtitle - very very long very very long very very long very very long very very long very very long very very long"
      actionsBar={<Button>Action</Button>}
      showBackButton
      onBackClicked={() => null}
    />
  </PageHeaderContainer>
));
