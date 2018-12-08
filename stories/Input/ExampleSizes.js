import React from 'react';
import PropTypes from 'prop-types';
import Input from 'wix-style-react/Input';

const style = {
  display: 'inline-block',
  padding: '0 5px',
  width: '200px',
  lineHeight: '22px',
  verticalAlign: 'top',
};

const defaultProps = {
  size: 'normal',
  magnifyingGlass: true,
  placeholder: 'They did not know it was impossible, so they did it!',
  unit: '$',
};

const Example = ({ theme }) => (
  <div>
    <div style={style}>
      Small
      <Input theme={theme} {...defaultProps} size="small" />
      <br />
      <Input theme={theme} {...defaultProps} size="small" error />
    </div>
    <div style={style}>
      Normal
      <br />
      <Input theme={theme} {...defaultProps} size="normal" />
      <br />
      <Input theme={theme} {...defaultProps} size="normal" error />
    </div>
    <div style={style}>
      Large
      <br />
      <Input theme={theme} {...defaultProps} size="large" />
      <br />
      <Input theme={theme} {...defaultProps} size="large" error />
    </div>
  </div>
);

Example.propTypes = {
  theme: PropTypes.string,
};

export default Example;
