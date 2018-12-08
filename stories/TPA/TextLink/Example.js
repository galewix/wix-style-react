import React from 'react';
import TextLink from '../../../src/TPA/TextLink';

const style = {
  display: 'inline-block',
  padding: '0 5px',
  width: '140px',
  lineHeight: '22px',
};

function Example() {
  return (
    <div style={style}>
      <TextLink
        link="https://wix-wix-style-react.surge.sh/?selectedKind=Introduction&selectedStory=Getting%20started&full=0&down=0&left=1&panelRight=0"
        data-hook="story-text-link"
      >
        Click me
      </TextLink>
    </div>
  );
}

export default Example;
