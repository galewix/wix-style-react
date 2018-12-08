import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './styles.scss';

const Separator = ({ children, className }) => (
  <div
    className={classnames(styles.separator, className)}
    data-hook="menu-navigation-separator"
  >
    {children}
  </div>
);

Separator.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Separator;
