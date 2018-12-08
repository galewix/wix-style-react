import identity from './identity';
import isObject from './isObject';

export default function pickBy(obj, predicate = identity) {
  if (!isObject(obj) || typeof predicate !== 'function') {
    return {};
  }

  return Object.keys(obj).reduce((acc, key) => {
    if (predicate(obj[key], key)) {
      return { ...acc, [key]: obj[key] };
    }

    return acc;
  }, {});
}
