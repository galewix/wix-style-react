import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './styles.scss';

const Footer = ({ children, className }) => (
  <div className={classnames(styles.footer, className)} data-hook="menu-footer">
    {children}
  </div>
);

Footer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Footer;
