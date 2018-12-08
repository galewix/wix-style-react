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
      Left to right
      <Input theme={theme} magnifyingGlass />
    </div>
    <div className="rtl" style={style}>
      Right to left
      <Input theme={theme} rtl magnifyingGlass />
    </div>
    <div style={style}>
      With unit
      <Input theme={theme} magnifyingGlass unit="$" />
    </div>
    <div style={style}>
      With error
      <Input theme={theme} magnifyingGlass error />
    </div>
    <div style={style}>
      With unit &amp; error
      <Input theme={theme} magnifyingGlass error unit="$" />
    </div>
  </div>
);

Example.propTypes = {
  theme: PropTypes.string,
};

export default Example;
