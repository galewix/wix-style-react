import BadgeSelect from 'wix-style-react/BadgeSelect';
import {SKIN, TYPE, SIZE} from 'wix-ui-backoffice/dist/src/components/Badge/constants';
import {storySettings} from './storySettings';

const options = Object.values(SKIN).map((skin, id) => ({
  id: id.toString(),
  skin,
  text: skin
}));

export default {
  category: storySettings.kind,
  storyName: storySettings.storyName,

  component: BadgeSelect,
  componentPath: '../../src/BadgeSelect',

  componentProps: setState => ({
    dataHook: storySettings.dataHook,
    options,
    selectedId: '0',
    onSelect: ({id}) => setState({selectedId: id}),
    uppercase: true
  }),

  exampleProps: {
    selectedId: options.map(({id}) => id),
    options: [
      {label: 'All badges', value: options}
    ],
    type: Object.keys(TYPE),
    size: Object.keys(SIZE)
  }
};
