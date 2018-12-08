import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './styles.scss';

const Promotion = ({ children, className }) => (
  <div
    className={classnames(styles.promotion, className)}
    data-hook="menu-promotion"
  >
    {children}
  </div>
);

Promotion.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Promotion;
