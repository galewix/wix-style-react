import pickBy from '../../utils/operators/pickBy';

export const pickAccessibilityProps = (props = {}) =>
  pickBy(props, (val, key) => key.startsWith('aria-'));
