import isObject from './isObject';

export default function values(obj) {
  if (Array.isArray(obj) || typeof obj === 'string') {
    return [...obj];
  }

  if (!isObject(obj)) {
    return [];
  }

  return Object.keys(obj).map(key => obj[key]);
}
