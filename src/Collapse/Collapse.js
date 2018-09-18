import React from 'react';
import PropTypes from 'prop-types';
import ReactCollapse from 'react-collapse';

const Collapse = ({children, open}) => (
  <ReactCollapse isOpened={open} children={children}/>
);

Collapse.displayName = 'Collapse';

Collapse.propTypes = {
  children: PropTypes.node,
  open: PropTypes.bool
};

Collapse.defaultProps = {
  open: true
};

export default Collapse;
