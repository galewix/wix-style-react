import isObject from './isObject';

describe('isObject operator', () => {
  it('should return false for primitives', () => {
    expect(isObject(4)).toBe(false);
    expect(isObject('4')).toBe(false);
    expect(isObject(true)).toBe(false);
    expect(isObject(Symbol.for('foo'))).toBe(false);
  });

  it('should return false for null', () => {
    expect(isObject(null)).toBe(false);
  });

  it('should return false for undefined', () => {
    expect(isObject(undefined)).toBe(false);
  });

  it('should return true for an object', () => {
    expect(isObject({})).toBe(true);
  });
});
