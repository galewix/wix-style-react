import React, { Component } from 'react';
import TextLink from 'wix-style-react/TextLink';
import Add from 'wix-style-react/new-icons/Add';

const style = {
  display: 'inline-block',
  padding: '0 5px',
  width: '340px',
  backgroundColor: '#172D3C',
  lineHeight: '22px',
};

class ControlledExample extends Component {
  render() {
    return (
      <div style={style}>
        <TextLink theme="darkBackground" link="http://www.wix.com">
          Wix link
        </TextLink>
        <br />
        <TextLink
          theme="darkBackground"
          underlineStyle="always"
          link="http://www.wix.com"
        >
          Wix link underline
        </TextLink>
        <br />
        <TextLink
          theme="darkBackground"
          underlineStyle="never"
          link="http://www.wix.com"
        >
          Wix link without underline
        </TextLink>
        <br />
        <TextLink theme="darkBackground" size="small" link="http://www.wix.com">
          Wix link small
        </TextLink>
        <br />
        <TextLink theme="darkBackground" ellipsis link="http://www.wix.com">
          A link with ellipsis and as very long text, so long, very long.
        </TextLink>
        <TextLink
          theme="darkBackground"
          ellipsis
          link="http://www.wix.com"
          prefixIcon={<Add />}
        >
          A link with ellipsis (very long text) and a prefix icon!
        </TextLink>
      </div>
    );
  }
}

export default () => <ControlledExample />;
