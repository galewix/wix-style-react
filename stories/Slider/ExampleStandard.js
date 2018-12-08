import React from 'react';
import Slider from './ControlledSlider';

const style = {
  padding: '0 5px 55px',
  width: '500px',
};

export default () => {
  return (
    <div>
      <div style={style}>
        Single handle
        <Slider dataHook={'story-slider'} value={[3]} min={1} max={10} />
      </div>
      <div style={style}>
        Multiple handles
        <Slider
          dataHook={'story-slider-multiple'}
          value={[3, 4, 5]}
          min={1}
          max={10}
        />
      </div>
    </div>
  );
};
