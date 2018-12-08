import React from 'react';
import PropTypes from 'prop-types';
import WixComponent from '../../BaseComponents/WixComponent';
import Text from '../../Text';

class ExtraText extends WixComponent {
  static propTypes = {
    text: PropTypes.string.isRequired,
  };

  render() {
    return <Text secondary>{this.props.text}</Text>;
  }
}

export default ExtraText;
