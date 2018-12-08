import React from 'react';
import LiveCodeExample from 'wix-storybook-utils/LiveCodeExample';

import * as wsrScope from '../../../../src/index';
import * as iconsScope from 'wix-ui-icons-common';

/*
 * The following object defines the globals that'll be available in the live
 * example's context. If a component is failed to render, make sure it's
 * available in the index file.
 */
const baseScope = {
  ...wsrScope,
  ...iconsScope,
};

const Component = props => {
  const { scope, ...rest } = props;
  // Remove `eslint-disable` comments
  const filteredCode = props.initialCode.replace(
    /^(\s)*\/\*(\s)*eslint-disable(\s)*\*\/(\s)*$/gm,
    '',
  );

  return (
    <LiveCodeExample
      scope={{ ...baseScope, ...scope }}
      {...rest}
      initialCode={filteredCode}
    />
  );
};

Component.propTypes = {
  ...LiveCodeExample.propTypes,
};

export default Component;
