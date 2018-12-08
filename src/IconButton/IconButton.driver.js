import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';

export const iconButtonDriverFactory = base => {
  return {
    ...baseUniDriverFactory(base),
    isButtonDisabled: async () => !!(await base.attr('disabled')),
  };
};
