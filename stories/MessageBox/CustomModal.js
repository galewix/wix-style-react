import React from 'react';
import TabbedView from 'wix-storybook-utils/TabbedView';
import Markdown from 'wix-storybook-utils/Markdown';

import Readme from '../../src/MessageBox/README.md';
import ReadmeTestKit from '../../src/MessageBox/README.TESTKIT.md';
import CodeExample from 'wix-storybook-utils/CodeExample';

import FullScreenModal from './CustomModalExamples/FullScreenModal';
import FullScreenModalRaw from '!raw-loader!./CustomModalExamples/FullScreenModal';

const introduction = `# Custom modal (\`<MessageBoxFunctionalLayout/>\`)`;

const layoutStyles = {
  margin: '0 30px',
};

export default () => (
  <TabbedView tabs={['Usage', 'API', 'TestKits']}>
    <div>
      <Markdown source={introduction} />
      <div style={layoutStyles}>
        <CodeExample
          title="fullscreen"
          code={FullScreenModalRaw}
          children={<FullScreenModal />}
        />
      </div>
    </div>

    <Markdown source={Readme} />

    <Markdown source={ReadmeTestKit} />
  </TabbedView>
);
