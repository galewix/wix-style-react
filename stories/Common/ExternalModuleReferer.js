import React from 'react';
import PropTypes from 'prop-types';
import CodeBlock from 'wix-storybook-utils/CodeBlock';
import Markdown from 'wix-storybook-utils/Markdown';

const apiReadme = name => `
## API
See the full api <a href="https://wix.github.io/wix-ui-backoffice/?selectedKind=Components&selectedStory=${name}">here</a>
`;

const ExternalModuleReferer = ({ name, example }) => {
  return (
    <div>
      <Markdown source={`# \`<${name}/>\``} />
      <CodeBlock source={`import ${name} from 'wix-style-react/${name}';`} />
      {example ? (
        <div>
          <Markdown source={'## Example'} />
          {example}
        </div>
      ) : null}
      <Markdown source={apiReadme(name)} />
    </div>
  );
};

ExternalModuleReferer.propTypes = {
  name: PropTypes.string,
  example: PropTypes.node,
};

export default ExternalModuleReferer;
