import React from 'react';
import PropTypes from 'prop-types';

import styles from './Group.scss';

const Group = ({ children }) => <div className={styles.root}>{children}</div>;

Group.displayName = 'Input.Group';
Group.propTypes = {
  children: PropTypes.node,
};

export default Group;
