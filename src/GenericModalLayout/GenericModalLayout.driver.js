import { isClassExists } from '../../test/utils';

export default ({ element }) => {
  return {
    exists: () => !!element,
    isFullscreen: () => isClassExists(element, 'fullscreenContainer'),
  };
};
