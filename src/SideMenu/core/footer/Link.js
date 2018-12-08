import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './styles.scss';

const Link = ({ children, icon, className, ...rest }) => (
  <a className={classnames(styles.link, className)} {...rest}>
    {icon && <div className={styles.linkIcon}>{icon}</div>}
    {children}
  </a>
);

Link.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  icon: PropTypes.node,
};

export default Link;
