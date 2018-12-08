import React from 'react';
import { shallow } from 'enzyme';

import TextLabel from '.';

describe('TextLabel', () => {
  it('should render children', () => {
    const wrapper = shallow(<TextLabel children={'covfefe'} />);
    expect(wrapper.contains('covfefe')).toBe(true);
  });

  it('should have correct displayName', () => {
    expect(TextLabel.displayName).toBe('Notification.TextLabel');
  });
});
