import React from 'react';

import LiveCodeExample from '../../utils/Components/LiveCodeExample';

import ExamplesSizes from '!raw-loader!./ExamplesSizes';
import ExamplesPrimary from '!raw-loader!./ExamplesPrimary';
import ExamplesSecondary from '!raw-loader!./ExamplesSecondary';

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

class IconButtonStory extends React.Component {
  render() {
    return (
      <div style={{ margin: '0px 0 16px', paddingLeft: '20px' }}>
        <Container>
          <Box>
            <LiveCodeExample
              compact
              previewRow
              title="IconButton - priority: primary"
              initialCode={ExamplesPrimary}
            />
          </Box>
          <Box>
            <LiveCodeExample
              compact
              previewRow
              title="IconButton - priority: secondary"
              initialCode={ExamplesSecondary}
            />
          </Box>
        </Container>
        <Container>
          <Box>
            <LiveCodeExample
              compact
              previewRow
              title="IconButton - size"
              initialCode={ExamplesSizes}
            />
          </Box>
        </Container>
      </div>
    );
  }
}

export default IconButtonStory;
