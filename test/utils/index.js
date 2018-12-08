export { isClassExists, makeControlled } from 'wix-ui-test-utils/react-helpers';

export const findByHook = (element, hook) =>
  element.querySelector(`[data-hook*="${hook}"]`);

export const resolveIn = timeout =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve({});
    }, timeout);
  });

export const ASSET_PREFIX = 'http://localhost/';
