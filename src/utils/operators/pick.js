import isObject from './isObject';

export default function pick(obj, paths = []) {
  if (!isObject(obj)) {
    return {};
  }

  let pathsArr;

  if (typeof paths === 'string') {
    pathsArr = [paths];
  } else if (!Array.isArray(paths)) {
    pathsArr = [];
  } else {
    pathsArr = paths;
  }

  return Object.keys(obj).reduce((acc, key) => {
    if (pathsArr.indexOf(key) !== -1) {
      return { ...acc, [key]: obj[key] };
    }

    return acc;
  }, {});
}
