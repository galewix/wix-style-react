import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import WixComponent from '../BaseComponents/WixComponent';

import styles from './GenericModalLayout.scss';

export default class GenericModalLayout extends WixComponent {
  render() {
    const { fullscreen, header, content, footer } = this.props;

    const containerClassNames = classNames(styles.container, {
      [styles.fullscreenContainer]: fullscreen,
    });

    return (
      <div
        className={containerClassNames}
        data-fullscreen={Boolean(fullscreen)}
      >
        <div>{header}</div>

        <div className={styles.content}>{content}</div>

        <div>{footer}</div>
      </div>
    );
  }
}

GenericModalLayout.propTypes = {
  header: PropTypes.node,
  content: PropTypes.node,
  footer: PropTypes.node,
  fullscreen: PropTypes.bool,
};

GenericModalLayout.defaultProps = {
  fullscreen: false,
};

GenericModalLayout.displayName = 'GenericModalLayout';
