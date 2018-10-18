import React, {Component} from 'react';
import Text from '../../Text';
import PropTypes from 'prop-types';
import colors from '../AddItem.scss';

const SPACING = {
  large: {paddingTop: '12px', width: '100%'},
  medium: {paddingTop: '12px', width: '100%'},
  small: {paddingTop: '6px', width: '100%'},
  tiny: {flexBasis: 'auto', maxWidth: '100%'}
};

const ALIGN_TEXT = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

class ActionText extends Component {
  static propTypes = {
    children: PropTypes.string,
    disabled: PropTypes.bool,
    size: PropTypes.string
  };
  render() {
    const {children, disabled, size} = this.props;
    const textSize = size === 'tiny' ? 'small' : 'medium';
    return (
      <div style={{...SPACING[size], ...ALIGN_TEXT}}>
        <Text
          weight="thin"
          size={textSize}
          style={{
            color: disabled ? colors.D55 : colors.B10
          }}
          dataHook="additem-text"
          ellipsis
          >
          {children}
        </Text>
      </div>
    );
  }
}
export default ActionText;
