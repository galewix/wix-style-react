import React from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash/uniqueId';
import classnames from 'classnames';

import WixComponent from '../../BaseComponents/WixComponent';

import styles from '../RadioGroup.scss';
import { withFocusable, focusableStates } from '../../common/Focusable';
import Text from '../../Text';

class RadioButton extends WixComponent {
  static displayName = 'RadioGroup.Radio';

  static propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    vAlign: PropTypes.oneOf(['center', 'top']),
    name: PropTypes.string,
    onChange: PropTypes.func,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    children: PropTypes.any,
    style: PropTypes.object,
    type: PropTypes.oneOf(['default', 'button']),
    lineHeight: PropTypes.string,

    /** optional node to be rendered under label. Clicking it will not trigger `onChange` */
    content: PropTypes.node,
  };

  static defaultProps = {
    vAlign: 'center',
    type: 'default',
    content: null,
  };

  constructor(props) {
    super(props);
    this.id = uniqueId();
  }

  renderButton() {
    const { checked, disabled, onChange, value, icon, children } = this.props;

    return (
      <button
        type="button"
        className={classnames(styles.radioButton, {
          [styles.checked]: checked,
        })}
        checked={checked}
        disabled={disabled}
        id={this.id}
        onClick={() => (!checked && !disabled ? onChange(value) : null)}
      >
        {icon && <span>{icon}</span>}
        {children && <span>{children}</span>}
      </button>
    );
  }

  renderRadio() {
    const {
      checked,
      children,
      content,
      disabled,
      lineHeight,
      name,
      onChange,
      style,
      vAlign,
      value,
    } = this.props;

    return (
      <div
        className={classnames(styles.radioWrapper, {
          [styles.disabled]: disabled,
          [styles.checked]: checked,
        })}
        style={style}
        tabIndex={disabled ? null : 0}
        onFocus={this.props.focusableOnFocus}
        onBlur={this.props.focusableOnBlur}
        {...focusableStates(this.props)}
      >
        <input
          type="radio"
          name={name}
          value={value}
          id={this.id}
          checked={checked}
          disabled={disabled}
          onChange={() => (!checked && !disabled ? onChange(value) : null)}
        />

        <label
          data-hook="radio-label"
          style={{ lineHeight }}
          htmlFor={this.id}
          className={classnames({
            [styles.vcenter]: vAlign === 'center',
            [styles.vtop]: vAlign === 'top',
          })}
        >
          <div
            style={{ height: lineHeight }}
            className={styles.radioButtonWrapper}
            data-hook="radiobutton-radio"
          >
            <div
              className={classnames(styles.radio, {
                [styles.radioButtonChecked]: checked,
              })}
            />
          </div>

          {children && (
            <Text
              className={styles.children}
              data-hook="radiobutton-children"
              tagName="div"
              size="medium"
              weight="thin"
              secondary
              light={disabled}
            >
              {children}
            </Text>
          )}
        </label>

        {content && <div data-hook="radio-button-content">{content}</div>}
      </div>
    );
  }

  render() {
    return this.props.type === 'button'
      ? this.renderButton()
      : this.renderRadio();
  }
}

export default withFocusable(RadioButton);
