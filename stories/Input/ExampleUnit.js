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
      <Input theme={theme} unit="#" />
    </div>
    <div className="rtl" style={style}>
      Right to left
      <Input theme={theme} rtl unit="$" />
    </div>
    <div style={style}>
      With error
      <Input theme={theme} error unit="$" />
    </div>
  </div>
);

Example.propTypes = {
  theme: PropTypes.string,
};

export default Example;
