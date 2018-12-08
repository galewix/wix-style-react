import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './styles.scss';

const Category = ({ children, className }) => (
  <div
    className={classnames(styles.categoryLabel, className)}
    data-hook="menu-navigation-category"
  >
    {children}
  </div>
);

Category.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Category;
