import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '../../../Tooltip';
import styles from './styles.scss';

const TinyLink = ({ icon, tooltip, ...rest }) => (
  <Tooltip
    content={<span style={{ whiteSpace: 'nowrap' }}>{tooltip}</span>}
    moveBy={{ x: 3, y: 15 }}
    appendToParent
  >
    <a className={`${styles.link} ${styles.tinyLink}`} {...rest}>
      <div className={styles.linkIcon}>{icon}</div>
    </a>
  </Tooltip>
);

TinyLink.propTypes = {
  icon: PropTypes.node.isRequired,
  tooltip: PropTypes.string.isRequired,
};

export default TinyLink;
