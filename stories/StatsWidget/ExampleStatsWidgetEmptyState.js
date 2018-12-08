import React from 'react';
import StatsWidget from '../../src/StatsWidget';
import styles from './ExampleStatsWidget.scss';
import { Container } from '../../src/Grid';
import Text from '../../src/Text';

const emptyState = (
  <div style={{ textAlign: 'center' }}>
    <Text secondary>
      No tickets sold yet. Check back later to see your sales
    </Text>
  </div>
);

export default () => (
  <Container>
    <div data-hook="card-example" className={styles.statsWidgetWrapper}>
      <StatsWidget title="Your Ticket Sales" emptyState={emptyState} />
    </div>
  </Container>
);
