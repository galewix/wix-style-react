import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../Text';

const TextLabel = ({ children }) => (
  <Text ellipsis light dataHook="notification-label">
    {children}
  </Text>
);

TextLabel.propTypes = {
  children: PropTypes.node,
};

TextLabel.displayName = 'Notification.TextLabel';

export default TextLabel;
