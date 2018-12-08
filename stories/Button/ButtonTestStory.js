import React from 'react';
import { storiesOf } from '@storybook/react';
import queryString from 'query-string';
import pick from '../../src/utils/operators/pick';
import { TESTS_PREFIX } from '../storiesHierarchy';
import Button from 'wix-style-react/Button';
import Check from '../../src/new-icons/Check';
import X from '../../src/new-icons/X';

const BUTTON_PADDING = '5px';
const COLUMN_STYLE = { margin: '5px', border: '1px solid' };

function renderThemes(themes, props) {
  return themes.map((theme, index) => (
    <div
      key={index}
      style={{
        display: 'flex',
        width: '300px',
        alignItems: 'center',
      }}
    >
      <span style={{ flexGrow: 1, padding: '5px' }}>{theme}</span>
      <span
        style={{
          padding: BUTTON_PADDING,
          backgroundColor:
            theme.includes('white') && theme.includes('secondary')
              ? '#5b7fa4'
              : '#F0F4F7',
        }}
      >
        <Button theme={theme} {...props} />
      </span>
    </div>
  ));
}

const variants = props => (
  <div style={{ display: 'flex' }}>
    <div style={COLUMN_STYLE}>
      {renderThemes(
        [
          'transparent',
          'fullred',
          'fullgreen',
          'fullpurple',
          'emptyred',
          'emptygreen',
          'emptybluesecondary',
          'emptyblue',
        ],
        { children: 'Click Me', ...props },
      )}
    </div>
    <div style={COLUMN_STYLE}>
      {renderThemes(
        [
          'emptypurple',
          'fullblue',
          'login',
          'emptylogin',
          'transparentblue',
          'whiteblue',
          'whiteblueprimary',
          'whitebluesecondary',
        ],
        { children: 'Click Me', ...props },
      )}
    </div>
    <div style={COLUMN_STYLE}>
      {renderThemes(['close-standard', 'close-dark', 'close-transparent'], {
        children: <X />,
        ...props,
      })}
      {renderThemes(
        [
          'icon-greybackground',
          'icon-standard',
          'icon-standardsecondary',
          'icon-white',
          'icon-whitesecondary',
        ],
        { children: <Check />, ...props },
      )}
    </div>
  </div>
);

storiesOf(`${TESTS_PREFIX}/5. Buttons`, module).add('5.0 ButtonLayout', () => {
  const props = pick(queryString.parse(window.location.search), [
    'height',
    'hover',
  ]);
  return (
    <div>
      <p>props={JSON.stringify(props)}</p>
      {variants(props)}
    </div>
  );
});
