import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './styles.scss';

const Navigation = ({ children, className }) => (
  <div
    className={classnames(styles.navigation, className)}
    data-hook="menu-navigation"
  >
    {children}
  </div>
);

Navigation.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Navigation;
