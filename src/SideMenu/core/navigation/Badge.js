import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './styles.scss';

class Badge extends React.Component {
  render() {
    const { className, ...rest } = this.props;
    return (
      <span
        className={classnames(styles.linkBadge, className)}
        data-hook="menu-navigation-badge"
        {...rest}
      />
    );
  }
}

Badge.propTypes = {
  className: PropTypes.string,
};

export default Badge;
