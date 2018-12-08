import React, { Children } from 'react';
import { any, bool, node } from 'prop-types';
import last from 'lodash/last';
import WixComponent from '../../BaseComponents/WixComponent';
import styles from './InputAreaWithLabelComposite.scss';
import FieldLabelAttributes from '../../FieldLabelAttributes/FieldLabelAttributes';

class InputAreaWithLabelComposite extends WixComponent {
  getFieldLabelAttributesComponent() {
    return (
      <FieldLabelAttributes
        appendToParent={this.props.appendToParent}
        required={this.props.required}
        info={this.props.info}
        tooltip={this.props.tooltip}
      />
    );
  }

  shouldShowFieldLabelAttributesComponent() {
    return this.props.required || this.props.info || this.props.tooltip;
  }

  render() {
    const children = Children.toArray(this.props.children);
    return (
      <div>
        {children.length === 2 ? (
          <div className={styles.label}>
            {children[0]}
            {this.shouldShowFieldLabelAttributesComponent()
              ? this.getFieldLabelAttributesComponent()
              : null}
          </div>
        ) : null}
        {children.length === 1 &&
        this.shouldShowFieldLabelAttributesComponent() ? (
          <div className={styles.withLabelAttributes}>
            <div className={styles.inputWrapper}>{last(children)}</div>
            {this.getFieldLabelAttributesComponent()}
          </div>
        ) : (
          last(children)
        )}
      </div>
    );
  }
}

InputAreaWithLabelComposite.propTypes = {
  children: any,
  required: bool,
  appendToParent: bool,
  info: node,
  tooltip: node,
};

InputAreaWithLabelComposite.defaultProps = {
  appendToParent: false,
};

InputAreaWithLabelComposite.displayName = 'InputAreaWithLabelComposite';

export default InputAreaWithLabelComposite;
