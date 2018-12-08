import React from 'react';

import Page from 'wix-style-react/Page';
import Button from 'wix-style-react/Button';
import SomeContentComponent from './SomeContentComponent';
import SomeTailComponent from './SomeTailComponent';

export const header = breadcrumbs => (
  <Page.Header
    breadcrumbs={breadcrumbs}
    title="Page Title"
    subtitle="Page subtitle"
    showBackButton
    onBackClicked={() => {}}
    actionsBar={<Button>Action</Button>}
  />
);

export const content = showScss => (
  <Page.Content>
    <SomeContentComponent showScss={showScss} />
  </Page.Content>
);

export const tail = (
  <Page.Tail>
    <SomeTailComponent />
  </Page.Tail>
);

export const fixedContent = (
  <Page.FixedContent>
    <div style={{ padding: '10px 0px', backgroundColor: 'white' }}>
      This is a fixedContent
    </div>
  </Page.FixedContent>
);
