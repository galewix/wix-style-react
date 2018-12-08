import identity from './identity';
import isObject from './isObject';

export default function mapValues(obj, iteratee = identity) {
  if (!isObject(obj) || typeof iteratee !== 'function') {
    return {};
  }

  return Object.keys(obj).reduce((acc, key) => {
    return { ...acc, [key]: iteratee(obj[key], key, obj) };
  }, {});
}
