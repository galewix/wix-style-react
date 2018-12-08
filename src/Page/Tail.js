import React from 'react';
import PropTypes from 'prop-types';

const Tail = ({ children, minimized }) =>
  React.cloneElement(children, { minimized });

Tail.displayName = 'Page.Tail';

Tail.propTypes = {
  children: PropTypes.element.isRequired,
  minimized: PropTypes.bool,
};

export default Tail;
