import React from 'react';

import Tag from 'wix-style-react/Tag';
import { createAutoExampleWrapper } from './AutoExampleWrapper';

const GREEN_THUMB = (
  <div
    style={{
      height: '100%',
      width: '100%',
      backgroundColor: 'green',
    }}
  />
);

const TagWrapper = ({ story__withThumb, ...rest }) =>
  story__withThumb ? <Tag thumb={GREEN_THUMB} {...rest} /> : <Tag {...rest} />;
TagWrapper.propTypes = Tag.propTypes;
TagWrapper.displayName = Tag.displayName;

export default {
  category: '12. Other',
  storyName: '12.5 Tag',

  component: createAutoExampleWrapper(TagWrapper),
  componentPath: '../src/Tag',
  componentProps: {
    children: 'Hello World',
    dataHook: 'story-tag',
    useOldMargins: false,
  },
  exampleProps: {
    onRemove: id => `ID: ${id} Removed!`,
    onClick: id => `ID: ${id} Clicked!`,
    thumb: [
      {
        label: 'green square',
        value: GREEN_THUMB,
      },
    ],
  },
};
