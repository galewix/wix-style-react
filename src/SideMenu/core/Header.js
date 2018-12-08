import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.scss';

const Header = ({ onClick, children, className }) => {
  const classes = classNames(
    styles.logo,
    { [styles.clickable]: !!onClick },
    className,
  );
  return (
    <div onClick={onClick} className={classes} data-hook="menu-header">
      {children}
    </div>
  );
};

Header.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Header;
