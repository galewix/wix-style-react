import React from 'react';
import linkHeaderDriverFactory from './LinkHeader.driver';
import { createDriverFactory } from 'wix-ui-test-utils/driver-factory';
import LinkHeader from './LinkHeader';
import {
  linkHeaderTestkitFactory,
  textLinkTestkitFactory,
} from '../../../testkit';
import { linkHeaderTestkitFactory as enzymeLinkHeaderTestkitFactory } from '../../../testkit/enzyme';
import { mount } from 'enzyme';

import {
  isTestkitExists,
  isEnzymeTestkitExists,
} from '../../../test/utils/testkit-sanity';

describe('LinkHeader', () => {
  const createDriver = createDriverFactory(linkHeaderDriverFactory);

  it('should have a title', () => {
    const driver = createDriver(
      <LinkHeader
        linkTitle="Wix"
        linkTo="http://www.wix.com/"
        title="Header Title"
      />,
    );
    expect(driver.title()).toBe('Header Title');
  });

  it('should have a subtitle', () => {
    const driver = createDriver(
      <LinkHeader
        linkTitle="Wix"
        linkTo="http://www.wix.com/"
        title="Header Title"
        subtitle="Header Subtitle"
      />,
    );
    expect(driver.subtitle()).toBe('Header Subtitle');
  });

  it('should have a TextLink testKit', () => {
    const driver = createDriver(
      <LinkHeader
        linkTitle="Wix"
        linkTo="http://www.wix.com/"
        title="Header Title"
        subtitle="Header Subtitle"
      />,
    );
    const textLinkDriverTestkit = textLinkTestkitFactory({
      wrapper: driver.element(),
      dataHook: driver.linkDataHook(),
    });
    expect(textLinkDriverTestkit.getContent()).toBe('Wix');
  });

  describe('testkits', () => {
    it('should exist', () => {
      expect(
        isTestkitExists(
          <LinkHeader
            linkTitle="Wix"
            linkTo="http://www.wix.com/"
            title="Header Title"
          />,
          linkHeaderTestkitFactory,
        ),
      ).toBe(true);
    });

    it('should exist for enzyme', () => {
      expect(
        isEnzymeTestkitExists(
          <LinkHeader
            linkTitle="Wix"
            linkTo="http://www.wix.com/"
            title="Header Title"
          />,
          enzymeLinkHeaderTestkitFactory,
          mount,
        ),
      ).toBe(true);
    });
  });
});
