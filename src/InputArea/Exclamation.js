import React from 'react';
import PropTypes from 'prop-types';
import FormFieldError from '../new-icons/system/FormFieldError';
import Tooltip from '../Tooltip';
import styles from './InputArea.scss';

const Exclamation = ({ errorMessage, tooltipPlacement, onTooltipShow }) => (
  <div className={styles.suffix}>
    <Tooltip
      dataHook="inputArea-tooltip"
      disabled={errorMessage.length === 0}
      placement={tooltipPlacement}
      onShow={onTooltipShow}
      alignment="center"
      hideDelay={100}
      content={errorMessage}
      moveBy={{ x: 0, y: -10 }}
      overlay=""
      maxWidth="250px"
      textAlign="left"
      theme="dark"
    >
      <div className={styles.errorIcon}>
        <FormFieldError />
      </div>
    </Tooltip>
  </div>
);

Exclamation.defaultProps = {
  errorMessage: '',
  tooltipPlacement: 'top',
};

Exclamation.propTypes = {
  errorMessage: PropTypes.string,
  tooltipPlacement: PropTypes.oneOf(['right', 'left', 'top', 'bottom']),
  onTooltipShow: PropTypes.func,
};

export default Exclamation;
