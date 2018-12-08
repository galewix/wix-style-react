import React from 'react';
import PropTypes from 'prop-types';
import Input from 'wix-style-react/Input';

const style = {
  display: 'inline-block',
  padding: '0 5px',
  width: '200px',
  lineHeight: '22px',
};

const Example = ({ theme }) => (
  <div>
    <div style={style}>
      Input
      <br />
      <Input theme={theme} />
    </div>
    <div style={style}>
      Focus
      <Input theme={theme} forceFocus />
    </div>
    <div style={style}>
      Hover
      <Input theme={theme} forceHover />
    </div>
    <div style={style}>
      With placeholder
      <Input theme={theme} placeholder="Search..." />
    </div>
    <div style={style}>
      Disabled
      <br />
      <Input theme={theme} disabled placeholder="disabled" />
    </div>
    <div style={style}>
      Disabled with search
      <br />
      <Input
        theme={theme}
        magnifyingGlass
        disabled
        placeholder="disabled with search"
      />
    </div>
    {theme === 'amaterial' && (
      <div style={style}>
        <Input title="With Title" placeholder="Placeholder..." theme={theme} />
      </div>
    )}
  </div>
);

Example.propTypes = {
  theme: PropTypes.string,
};

export default Example;
