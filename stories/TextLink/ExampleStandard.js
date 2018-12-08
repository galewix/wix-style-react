import React, { Component } from 'react';
import TextLink from 'wix-style-react/TextLink';
import Add from 'wix-style-react/new-icons/Add';

const style = {
  display: 'inline-block',
  padding: '0 5px',
  width: '340px',
  lineHeight: '22px',
};

class ControlledExample extends Component {
  render() {
    return (
      <div style={style}>
        <TextLink link="http://www.wix.com">Wix link</TextLink>
        <br />
        <TextLink underlineStyle="always" link="http://www.wix.com">
          Wix link underline
        </TextLink>
        <br />
        <TextLink underlineStyle="never" link="http://www.wix.com">
          Wix link without underline
        </TextLink>
        <br />
        <TextLink
          size="small"
          ariaLabel="wix.com site"
          link="http://www.wix.com"
        >
          Small link with ariaLabel
        </TextLink>
        <br />
        <TextLink ellipsis link="http://www.wix.com">
          A link with ellipsis and as very long text, so long, very long.
        </TextLink>
        <TextLink ellipsis link="http://www.wix.com" prefixIcon={<Add />}>
          A link with ellipsis (very long text) and a prefix icon!
        </TextLink>
      </div>
    );
  }
}

export default () => <ControlledExample />;
