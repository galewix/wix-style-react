import React from 'react';
import { storiesOf } from '@storybook/react';

import Markdown from 'wix-storybook-utils/Markdown';

import Heading from 'wix-style-react/Heading';
import Badge from 'wix-style-react/Badge';

import SortableListReadme from '../../src/SortableList/README.md';
import SortableListReadmeAPI from '../../src/SortableList/API.md';
import {
  SingleAreaList,
  MultiAreaList,
  MultiAreaListWithSortableColumns,
  Styles as SortableListStyles,
} from './SortableList';

import Introduction from './Introduction';
import Styles from './Styles';
import DragDropContextProvider from './DragDropContextProvider';

storiesOf('WIP/Drag And Drop', module)
  .add('Introduction', () => <Introduction />)
  .add('Styles', () => <Styles />)
  .add('DragDropContextProvider', () => <DragDropContextProvider />);

storiesOf('WIP/Drag And Drop/SortableList', module)
  .add('API', () => (
    <div>
      <Heading>
        SortableList API <Badge skin="danger">Under development</Badge>
      </Heading>
      <Markdown source={SortableListReadme} />
      <Markdown source={SortableListReadmeAPI} />
    </div>
  ))
  .add('Styles', () => <SortableListStyles />)
  .add('Single Area List', () => <SingleAreaList />)
  .add('Multi Area List', () => <MultiAreaList />)
  .add('Multi Area List with sortable columns', () => (
    <MultiAreaListWithSortableColumns />
  ));
