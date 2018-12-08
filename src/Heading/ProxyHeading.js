import React from 'react';
import { bool } from 'prop-types';
import { createHOC } from 'wix-ui-core/dist/src/createHOC';
import Heading from './Heading';
import { withEllipsedTooltip } from 'wix-ui-core/dist/src/hocs/EllipsedTooltip';
import ellipsedStyle from '../common/EllipsedTooltip/EllipsedTooltip.st.css';

const EllipsedHeading = withEllipsedTooltip({ showTooltip: true })(Heading);

const ProxyHeading = ({ ellipsis, ...props }) =>
  ellipsis ? (
    <EllipsedHeading {...ellipsedStyle('root', {}, props)} {...props} />
  ) : (
    <Heading {...props} />
  );

ProxyHeading.propTypes = {
  ...Heading.propTypes,

  /** should the text get ellipsed with tooltip, or should it get broken into lines when it reaches the end of its container */
  ellipsis: bool,
};

ProxyHeading.displayName = 'Heading';

export default createHOC(ProxyHeading);
