import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Tag.scss';
import CloseButton from '../CloseButton';
import WixComponent from '../BaseComponents/WixComponent';
import Text from '../Text';
import noop from 'lodash/noop';
import deprecationLog from '../utils/deprecationLog';
import {dataHooks} from './Tag.helpers';

const useOldMarginsDeprecationMessage = `You're using the <Tag/> component with margins which are incorrect. Pass 'useOldMargins={false}' prop in order to remove them. They will be removed in the next major version`;

const tagToTextSize = {
  tiny: 'tiny',
  small: 'small',
  medium: 'small',
  large: 'medium'
};

/**
 * A Tag component
 */
class Tag extends WixComponent {
  static displayName = 'Tag';

  componentDidMount() {
    super.componentDidMount();
    if (this.props.useOldMargins) {
      deprecationLog(useOldMarginsDeprecationMessage);
    }
  }

  _renderThumb() {
    const {thumb} = this.props;
    return thumb ? <span className={styles.thumb}>{thumb}</span> : null;
  }

  _renderText() {
    const {size, wrap, children} = this.props;
    const classes = classNames({
      [styles.tagTextEllipsis]: wrap
    });

    return (
      <Text className={classes} size={tagToTextSize[size]} weight={size === 'tiny' ? 'thin' : 'normal'} dataHook={dataHooks.text}>
        {children}
      </Text>
    );
  }

  _renderRemoveButton() {
    const {removable, disabled, size} = this.props;
    if (removable && !disabled) {
      return (<CloseButton
        size={size === 'large' ? 'large' : 'small'}
        theme="close-dark"
        dataHook={dataHooks.removeButton}
        className={styles.removeButton}
        onClick={this._handleRemoveClick}
        />);
    } else {
      return null;
    }
  }

  _handleRemoveClick = event => {
    const {onRemove, id} = this.props;
    event.stopPropagation();
    onRemove(id);
  };

  _getClassName() {
    const {thumb, removable, size, wrap, disabled, theme, useOldMargins, className, onClick} = this.props;
    return classNames(
      styles.root,
      className,
      styles[`${theme}Theme`],
      styles[`${size}Size`],
      {
        [styles.deprecatedMargins]: useOldMargins,
        [styles.withRemoveButton]: removable && !disabled,
        [styles.withThumb]: thumb,
        [styles.tagEllipsis]: wrap,
        [styles.disabled]: disabled,
        [styles.clickable]: onClick !== noop
      }
    );
  }

  render() {
    const {id, children, onClick, wrap, maxWidth} = this.props;

    return (
      <span
        className={this._getClassName()}
        id={id}
        title={wrap ? children : ''}
        onClick={() => onClick(id)}
        style={{maxWidth: `${maxWidth}px`}}
        >
        {this._renderThumb()}
        {this._renderText()}
        {this._renderRemoveButton()}
      </span>
    );
  }
}

Tag.propTypes = {
  children: PropTypes.string.isRequired,

  /** when set to true this component is disabled */
  disabled: PropTypes.bool,

  /** This feature keeps the old margins set to the component. in next major version will be set to false by default  */
  useOldMargins: PropTypes.bool,

  /** The id of the Tag  */
  id: PropTypes.string.isRequired,

  /** Callback function that pass `id` property as parameter when clicking on Tag */
  onClick: PropTypes.func,

  /** Callback function that pass `id` property as parameter when removing the Tag  */
  onRemove: PropTypes.func,

  /** If the Tag is removable then it will contain a small clickable X */
  removable: PropTypes.bool,

  /** The height of the Tag */
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large']),

  /** theme of the Tag */
  theme: PropTypes.oneOf(['standard', 'error', 'warning']),

  /** An optional thumb to display as part of the Tag */
  thumb: PropTypes.element,

  /** An optional maximum tag width in `px` for cropping. Should be used in pair with `wrap` property  */
  maxWidth: PropTypes.number,

  /** Whether to display ellipsis (...) for long content */
  wrap: PropTypes.bool,

  /* Standard className which has preference over any other intrinsic classes  */
  className: PropTypes.string
};

Tag.defaultProps = {
  onClick: noop,
  onRemove: noop,
  size: 'small',
  removable: true,
  theme: 'standard',
  wrap: false,
  useOldMargins: true
};

export default Tag;
