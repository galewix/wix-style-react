import React from 'react';
import { shallow, mount } from 'enzyme';
import GoogleAddressInput from './GoogleAddressInput';

const componentFactory = () => {
  const createShallow = (props = {}) => {
    return shallow(<GoogleAddressInput {...props} />);
  };

  const createMount = (props = {}) => {
    return mount(<GoogleAddressInput {...props} />);
  };

  return { createShallow, createMount };
};

export { componentFactory };
