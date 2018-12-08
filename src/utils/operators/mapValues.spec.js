import mapValues from './mapValues';
import sinon from 'sinon';

describe('mapValues operator', () => {
  it('should return an empty object for non-object input', () => {
    expect(mapValues(1)).toEqual({});
    expect(mapValues(true)).toEqual({});
    expect(mapValues('')).toEqual({});
    expect(mapValues(null)).toEqual({});
    expect(mapValues(undefined)).toEqual({});
    expect(mapValues(Symbol.for('foo'))).toEqual({});
  });

  it('should return an empty object for non-function map function', () => {
    expect(mapValues({ a: 1 }, 'not-a-function')).toEqual({});
  });

  it('should return given input', () => {
    const anObject = { a: 1, b: '2' };
    expect(mapValues(anObject)).toEqual({ a: 1, b: '2' });
  });

  it('should project input values by map function', () => {
    const anObject = { a: 1, b: 2 };
    const multiple = value => value + value;
    expect(mapValues(anObject, multiple)).toEqual({ a: 2, b: 4 });
  });

  it('should call map function with (value, key, object)', () => {
    const anObject = { a: 1 };
    const mapFunc = sinon.spy();
    mapValues(anObject, mapFunc);
    expect(mapFunc.calledWithExactly(1, 'a', anObject)).toBe(true);
  });
});
