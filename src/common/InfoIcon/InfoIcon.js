import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import InfoCircle from 'wix-ui-icons-common/InfoCircle';
import Tooltip from '../../Tooltip';

import styles from './InfoIcon.scss';

const rootHelper = (props, stylesObject) => ({
  className: classnames(stylesObject.root, props.className),
  'data-hook': props.dataHook,
});

const InfoIcon = props => (
  <div {...rootHelper(props, styles)}>
    <Tooltip theme="dark" moveBy={{ y: 6 }} {...props.tooltipProps}>
      <div>
        <InfoCircle size="24px" />
      </div>
    </Tooltip>
  </div>
);

InfoIcon.displayName = 'InfoIcon';

InfoIcon.propTypes = {
  tooltipProps: PropTypes.shape(Tooltip.propTypes),
  dataHook: PropTypes.string,
  className: PropTypes.string,
};

export default InfoIcon;
