import values from './values';

describe('values operator', () => {
  it('should return an empty object for invalid input', () => {
    expect(values(1)).toEqual([]);
    expect(values(true)).toEqual([]);
    expect(values(null)).toEqual([]);
    expect(values(undefined)).toEqual([]);
    expect(values(Symbol.for('foo'))).toEqual([]);
  });

  it('should return copy of give array', () => {
    expect(values([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it('should return an array of characters', () => {
    expect(values('abc')).toEqual(['a', 'b', 'c']);
  });

  it('should return an array of object own values', () => {
    const anObject = { a: 1, b: '2', c: true };
    const result = values(anObject);
    const expectedValues = [1, '2', true];

    // iteration order is not guaranteed
    expectedValues.forEach(val => expect(result).toContain(val));
    expect(result).toHaveLength(3);
  });
});
