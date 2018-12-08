import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from '../TableActionCell.st.css';

const HoverSlot = ({ display, children, ...props }) => (
  <span className={classNames(style.hoverSlot, style[display])} {...props}>
    {children}
  </span>
);

HoverSlot.propTypes = {
  display: PropTypes.oneOf(['always', 'onHover', 'notOnHover']),
  children: PropTypes.node,
};

export default HoverSlot;
