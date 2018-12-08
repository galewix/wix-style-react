import React from 'react';

import LiveCodeExample from '../../utils/Components/LiveCodeExample';

import ExamplesAffixes from '!raw-loader!./ExamplesAffixes';
import ExamplesNone from '!raw-loader!./ExamplesNone';
import ExamplesOnHover from '!raw-loader!./ExamplesOnHover';
import ExamplesSizes from '!raw-loader!./ExamplesSizes';
import ExamplesUnderline from '!raw-loader!./ExamplesUnderline';
import ExamplesWeight from '!raw-loader!./ExamplesWeight';

const controlledWidth = {
  height: 'auto',
  width: '100%',
  display: 'flex',
};

const halfColumn = {
  display: 'flex',
  flexDirection: 'column',
  padding: '10px',
  width: '48%',
  lineHeight: '1.6',
};

const Container = ({children}) => <div style={controlledWidth}>{children}</div>; //eslint-disable-line

const Box = ({children}) => <div style={halfColumn}>{children}</div>; //eslint-disable-line

class TextButtonStory extends React.Component {
  render() {
    return (
      <div style={{ margin: '0px 0 16px', paddingLeft: '20px' }}>
        <Container>
          <Box>
            <LiveCodeExample
              compact
              previewRow
              title="TextButton - underline:none (default)"
              initialCode={ExamplesNone}
            />
          </Box>
          <Box>
            <LiveCodeExample
              compact
              previewRow
              title="TextButton - underline:onHover"
              initialCode={ExamplesOnHover}
            />
          </Box>
        </Container>
        <Container>
          <Box>
            <LiveCodeExample
              compact
              previewRow
              title="TextButton - underline:always"
              initialCode={ExamplesUnderline}
            />
          </Box>
          <Box>
            <LiveCodeExample
              compact
              previewRow
              title="TextButton - prefixIcon & suffixIcon"
              initialCode={ExamplesAffixes}
            />
          </Box>
        </Container>
        <Container>
          <Box>
            <LiveCodeExample
              compact
              previewRow
              title=" TextButton - size"
              initialCode={ExamplesSizes}
            />
          </Box>
          <Box>
            <LiveCodeExample
              compact
              previewRow
              title="TextButton - weight"
              initialCode={ExamplesWeight}
            />
          </Box>
        </Container>
      </div>
    );
  }
}

export default TextButtonStory;
