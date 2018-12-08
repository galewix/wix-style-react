import React from 'react';
import { bool, func, object } from 'prop-types';

import css from './color-picker-history.scss';

const ColorPickerHistory = ({ show, current, previous, onClick }) => {
  if (show) {
    return (
      <div className={css.root} data-hook="color-picker-history">
        <div
          data-hook="color-picker-history-previous"
          style={{ background: previous.hex() }}
          onClick={() => onClick(previous)}
        />
        <div
          data-hook="color-picker-history-current"
          style={{ background: current.hex() }}
        />
      </div>
    );
  }
  return null;
};

ColorPickerHistory.propTypes = {
  show: bool.isRequired,
  previous: object.isRequired,
  current: object.isRequired,
  onClick: func.isRequired,
};

export default ColorPickerHistory;
