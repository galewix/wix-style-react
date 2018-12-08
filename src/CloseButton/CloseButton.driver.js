import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';

export const closeButtonDriverFactory = base => {
  return {
    ...baseUniDriverFactory(base),
    isButtonDisabled: async () => !!(await base.attr('disabled')),
  };
};
