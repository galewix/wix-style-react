import React from 'react';
import { shallow } from 'enzyme';

import Content from '.';
import EmptyState from '../../EmptyState';
import styles from './Content.scss';

describe('Card.Content', () => {
  describe('`children` prop', () => {
    it('should add `emptyStateContent` when `EmptyState`', () => {
      const component = shallow(<Content children={<EmptyState />} />);
      expect(component.hasClass(styles.emptyStateContent)).toBe(true);
    });

    it('should not add `emptyStateContent` when not `EmptyState`', () => {
      const component = shallow(<Content children="hello" />);
      expect(component.hasClass(styles.emptyStateContent)).not.toBe(true);
    });
  });
});
