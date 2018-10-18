import React from 'react';
import {isTestkitExists} from '../test/utils/testkit-sanity';

import Tag from '../src/Tag';
import ImageViewer from '../src/ImageViewer';
import FormField from '../src/FormField';
import AddItem from '../src/AddItem';
import BadgeSelect from '../src/BadgeSelect';

import {
  addItemTestkitFactory,
  badgeSelectTestkitFactory,
  formFieldTestkitFactory,
  imageViewerTestkitFactory,
  tagTestkitFactory
} from './index';

describe('vanilla testkits', () => {
  it('Tag exist', () => {
    expect(isTestkitExists(<Tag useOldMargins={false} id={'hello'}>a</Tag>, tagTestkitFactory)).toBe(true);
  });

  it('ImageViewer exist', () => {
    expect(isTestkitExists(<ImageViewer imageUrl=""/>, imageViewerTestkitFactory)).toBe(true);
  });

  it('FormField exist', () => {
    expect(isTestkitExists(<FormField><div/></FormField>, formFieldTestkitFactory)).toBe(true);
  });

  it('AddItem exist', () => {
    expect(isTestkitExists(<AddItem/>, addItemTestkitFactory)).toBe(true);
  });

  it('BadgeSelect exist', () => {
    expect(isTestkitExists(
      <BadgeSelect
        options={[{id: '0', skin: 'general', text: 'general'}]}
        selectedId={'0'}
        />,
      badgeSelectTestkitFactory,
    )).toBe(true);
  });
});
