import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ChevronLeft from 'wix-ui-icons-common/ChevronLeft';
import styles from './styles.scss';

const BackLink = ({ onBackHandler, className, children }) => (
  <a
    className={classnames(styles.backLink, className)}
    onClick={onBackHandler}
    data-hook="menu-navigation-back-link"
  >
    <span className={styles.backArrow}>
      <ChevronLeft size="14px" />
    </span>
    <span className={styles.backLabel}>{children}</span>
  </a>
);

BackLink.propTypes = {
  onBackHandler: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default BackLink;
