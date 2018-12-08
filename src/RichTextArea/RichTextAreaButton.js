import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Tooltip from '../Tooltip';
import TextAreaBold from '../new-icons/system/TextAreaBold';
import TextAreaItalic from '../new-icons/system/TextAreaItalic';
import TextAreaUnderline from '../new-icons/system/TextAreaUnderline';
import TextAreaBulletList from '../new-icons/system/TextAreaBulletList';
import TextAreaNumberedList from '../new-icons/system/TextAreaNumberedList';
import TextAreaLink from '../new-icons/system/TextAreaLink';
import TextAreaImage from '../new-icons/system/TextAreaImage';
import styles from './RichTextAreaButton.scss';
import { withFocusable, focusableStates } from '../common/Focusable';

const buttons = {
  bold: {
    icon: TextAreaBold,
    tooltipText: 'Bold',
  },
  italic: {
    icon: TextAreaItalic,
    tooltipText: 'Italic',
  },
  underline: {
    icon: TextAreaUnderline,
    tooltipText: 'Underline',
  },
  'unordered-list': {
    icon: TextAreaBulletList,
    tooltipText: 'Bulletted list',
  },
  'ordered-list': {
    icon: TextAreaNumberedList,
    tooltipText: 'Numbered list',
  },
  link: {
    icon: TextAreaLink,
    tooltipText: 'Link',
  },
  image: {
    icon: TextAreaImage,
    tooltipText: 'Image',
  },
};

class RichTextAreaButton extends Component {
  handleMouseDown = event => {
    event.preventDefault();
    if (!this.props.disabled) {
      this.props.onClick();
    }
  };

  render() {
    const { type, isActive, isTooltipDisabled, disabled } = this.props;
    const tooltipContent = (
      <p className={styles.tooltipContent}>{buttons[type].tooltipText}</p>
    );
    const className = classNames(styles.button, {
      [styles.isActive]: isActive,
      [styles.disabled]: disabled,
    });
    return (
      <Tooltip
        appendToParent
        content={tooltipContent}
        overlay=""
        theme="dark"
        alignment="center"
        moveBy={{ x: 2, y: 2 }}
        hideDelay={0}
        disabled={isTooltipDisabled}
      >
        <button
          type="button"
          className={className}
          data-hook={`rich-text-area-button-${type}`}
          {...focusableStates(this.props)}
          onFocus={this.props.focusableOnFocus} // eslint-disable-line react/prop-types
          onBlur={this.props.focusableOnBlur} // eslint-disable-line react/prop-types
          onMouseDown={this.handleMouseDown}
        >
          <span className={styles.wrapper}>{this.renderIcon()}</span>
        </button>
      </Tooltip>
    );
  }

  renderIcon() {
    const { icon: Icon } = buttons[this.props.type];
    return <Icon />;
  }
}

RichTextAreaButton.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
  isTooltipDisabled: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default withFocusable(RichTextAreaButton);
