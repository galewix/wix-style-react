import React from 'react';
import { func } from 'prop-types';

import Button from '../Button';
import X from '../new-icons/X';
import Check from '../new-icons/Check';

import css from './color-picker-actions.scss';

const ColorPickerActions = ({ onCancel, onConfirm }) => (
  <div className={css.root}>
    <Button height="small" theme="icon-standardsecondary" onClick={onCancel}>
      <X />
    </Button>
    <Button
      dataHook="color-picker-confirm-button"
      height="small"
      theme="icon-standard"
      onClick={onConfirm}
    >
      <Check />
    </Button>
  </div>
);

ColorPickerActions.propTypes = {
  onCancel: func.isRequired,
  onConfirm: func.isRequired,
};

export default ColorPickerActions;
