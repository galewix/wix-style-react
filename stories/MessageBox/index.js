import React from 'react';
import { storiesOf } from '@storybook/react';
import Alert from './Alert';
import DestructiveAlert from './DestructiveAlert';
import Announcement from './Announcement';
import CustomModal from './CustomModal';

storiesOf('9. Modals', module)
  .add('9.1 Alert', () => <Alert />)
  .add('9.2 Destructive Alert', () => <DestructiveAlert />)
  .add('9.3 Custom Modal', () => <CustomModal />)
  .add('9.4 Announcement', () => <Announcement />);
