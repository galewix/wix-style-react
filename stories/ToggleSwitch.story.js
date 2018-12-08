import ToggleSwitch from 'wix-style-react/ToggleSwitch';
import {
  SKINS,
  SIZES,
} from 'wix-ui-backoffice/dist/src/components/ToggleSwitch/constants';

export default {
  category: '4. Selection',
  storyName: '4.4 ToggleSwitch',

  component: ToggleSwitch,
  componentPath: '../src/ToggleSwitch',

  componentProps: (setState, getState) => ({
    checked: false,
    onChange: () => setState({ checked: !getState().checked }),
  }),

  exampleProps: {
    size: Object.keys(SIZES),
    skin: Object.keys(SKINS),

    onChange: () => 'changed',
  },
};
