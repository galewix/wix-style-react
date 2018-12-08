import React from 'react';
import { shallow } from 'enzyme';

import EndorseContentLayout from '.';
import styles from './styles.scss';

export default class EndorseContentLayoutDriver {
  component;
  when = {
    created: props =>
      (this.component = shallow(<EndorseContentLayout {...props} />)),
  };

  get = {
    root: () => this.component.find(`.${styles.root}`),
    head: () => this.component.find(`.${styles.head}`),
    content: () => this.component.find(`.${styles.content}`),
    primaryCta: () => this.component.find(`.${styles.primaryCta}`),
    secondaryCta: () => this.component.find(`.${styles.secondaryCta}`),
  };
}
