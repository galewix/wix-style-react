import React from 'react';
import {mount} from 'enzyme';
import {isEnzymeTestkitExists} from '../test/utils/testkit-sanity';

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
} from './enzyme';

describe('enzyme testkits', () => {
  it('Tag exist', () => {
    expect(isEnzymeTestkitExists(<Tag useOldMargins={false} id={'hello'}>a</Tag>, tagTestkitFactory, mount)).toBe(true);
  });

  it('AddItem exist', () => {
    expect(isEnzymeTestkitExists(<AddItem/>, addItemTestkitFactory, mount)).toBe(true);
  });

  it('ImageViewer exist', () => {
    expect(isEnzymeTestkitExists(<ImageViewer imageUrl=""/>, imageViewerTestkitFactory, mount)).toBe(true);
  });

  it('FormField exist', () => {
    expect(isEnzymeTestkitExists(<FormField><div/></FormField>, formFieldTestkitFactory, mount)).toBe(true);
  });

  it('BadgeSelect exist', () => {
    expect(isEnzymeTestkitExists(
      <BadgeSelect
        options={[{id: '0', skin: 'general', text: 'general'}]}
        selectedId={'0'}
        />,
      badgeSelectTestkitFactory,
      mount
    )).toBe(true);
  });
});
