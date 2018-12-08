import { pickAccessibilityProps } from './pickAccessibilityProps';

describe('accessibility', () => {
  describe('pickAccessibilityProps', () => {
    it('should return only the aria props', () => {
      const props = {
        a: 1,
        'aria-label': 'hello',
      };
      expect(pickAccessibilityProps(props)).toEqual({ 'aria-label': 'hello' });
    });
  });
});
