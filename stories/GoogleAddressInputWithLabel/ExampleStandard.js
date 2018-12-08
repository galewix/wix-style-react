import React, { Component } from 'react';
import PropTypes from 'prop-types';

import GoogleAddressInputWithLabelExample from './GoogleAddressInputWithLabelTemplate';
import Input from '../../src/Input';
import Label from '../../src/Label';
import ToggleSwitch from '../../src/ToggleSwitch';
import clients from 'wix-style-react/clients';

import styles from './ExampleStandard.scss';

class ExampleStandard extends Component {
  static propTypes = {
    onChange: PropTypes.func,
  };

  state = {
    withLabel: true,
    label: {
      appearance: 'T1.1',
      children: 'Address',
    },
    input: {
      placeholder: 'Enter Address...',
      Client: clients.GoogleMapsClient,
    },
  };

  setComponentState(componentName, obj) {
    this.setState(prevState => {
      prevState[componentName] = { ...this.state[componentName], ...obj };
      Object.keys(prevState[componentName]).forEach(
        k => !prevState[componentName][k] && delete prevState[componentName][k],
      );
      return prevState;
    });
  }

  render() {
    return (
      <from className={styles.form}>
        <div className={styles.input}>
          <div className={styles.option}>
            <Label>Show label</Label>
            <div className={styles.flex}>
              <Input
                size="small"
                value={this.state.label.children}
                onChange={e =>
                  this.setComponentState('label', { children: e.target.value })
                }
              />
              &nbsp;
              <ToggleSwitch
                size="small"
                checked={this.state.withLabel}
                onChange={() =>
                  this.setState({ withLabel: !this.state.withLabel })
                }
              />
            </div>
          </div>
          <div className={styles.option}>
            <Label>Placeholder</Label>
            <div className={styles.flex}>
              <Input
                size="small"
                value={this.state.input.placeholder}
                onChange={e =>
                  this.setComponentState('input', {
                    placeholder: e.target.value,
                  })
                }
              />
            </div>
          </div>
        </div>
        <div className={styles.output}>
          <GoogleAddressInputWithLabelExample
            {...this.state}
            onChange={this.props.onChange}
          />
        </div>
      </from>
    );
  }
}

export default ExampleStandard;
