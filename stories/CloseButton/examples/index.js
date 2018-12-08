import React from 'react';

import LiveCodeExample from '../../utils/Components/LiveCodeExample';

import ExamplesSkins from '!raw-loader!./ExamplesSkins';
import ExamplesSizes from '!raw-loader!./ExamplesSizes';

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

const Container = props => <div style={controlledWidth} {...props} />;

const Box = props => <div style={halfColumn} {...props} />;

class CloseButtonStory extends React.Component {
  render() {
    return (
      <div style={{ margin: '0px 0 16px', paddingLeft: '20px' }}>
        <Container>
          <Box>
            <LiveCodeExample
              compact
              previewRow
              title="CloseButton - skins"
              initialCode={ExamplesSkins}
            />
          </Box>
          <Box>
            <LiveCodeExample
              compact
              previewRow
              title="CloseButton - sizes"
              initialCode={ExamplesSizes}
            />
          </Box>
        </Container>
      </div>
    );
  }
}

export default CloseButtonStory;
