import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Backoffice/Button';
import * as styles from './FooterLayout.scss';
import classNames from 'classnames';

const FooterLayout = ({
  bottomChildren,
  children,
  theme,
  cancelText,
  onCancel,
  onOk,
  confirmText,
  buttonsHeight,
  enableOk,
  enableCancel,
  sideActions,
}) => {
  const footerButtonsClassNames = classNames(styles.footerbuttons, {
    [styles.withSideActions]: sideActions && (cancelText || confirmText),
  });
  return (
    <div>
      <div className={styles.footer} data-hook="message-box-footer">
        {sideActions}
        {children}
        <div className={footerButtonsClassNames}>
          {cancelText && (
            <Button
              disabled={!enableCancel}
              height={buttonsHeight}
              theme={'empty' + theme}
              onClick={onCancel}
              dataHook="cancellation-button"
              children={cancelText}
            />
          )}
          {confirmText && (
            <Button
              disabled={!enableOk}
              height={buttonsHeight}
              theme={'full' + theme}
              onClick={onOk}
              dataHook="confirmation-button"
              children={confirmText}
            />
          )}
        </div>
      </div>

      {bottomChildren && (
        <div
          data-hook="footer-layout-bottom-children"
          className={styles.bottomChildren}
          children={bottomChildren}
        />
      )}
    </div>
  );
};

FooterLayout.propTypes = {
  confirmText: PropTypes.node,
  cancelText: PropTypes.node,
  onCancel: PropTypes.func,
  onOk: PropTypes.func,
  enableOk: PropTypes.bool,
  enableCancel: PropTypes.bool,
  theme: PropTypes.string,
  buttonsHeight: PropTypes.string,
  children: PropTypes.any,
  bottomChildren: PropTypes.node,
  sideActions: PropTypes.node,
};

FooterLayout.defaultProps = {
  theme: 'blue',
  buttonsHeight: 'small',
  enableOk: true,
  enableCancel: true,
};

export default FooterLayout;
