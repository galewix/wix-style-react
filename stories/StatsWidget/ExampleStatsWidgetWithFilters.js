import React from 'react';
import StatsWidget from '../../src/StatsWidget';
import styles from './ExampleStatsWidget.scss';
import ButtonWithOptions from '../../src/ButtonWithOptions';
import { Container } from '../../src/Grid';

const statistics = [
  {
    title: '$10',
    subtitle: 'Revenue',
  },
  {
    title: '2',
    subtitle: 'Products',
  },
  {
    title: '1',
    subtitle: 'Transactions',
  },
  {
    title: '$5',
    subtitle: 'Profit',
  },
];

const dropdownOption = [
  { id: 0, value: 'This month' },
  { id: 1, value: 'This week' },
];

const onFilterChange = () => {
  alert('hi');
};

const optionsArray = dropdownOption.map(option => {
  const { value, ...props } = option;
  return (
    <ButtonWithOptions.Option key={option.id} {...props}>
      {value}
    </ButtonWithOptions.Option>
  );
});

const ButtonWithOptionsProps = {
  theme: 'no-border',
  dataHook: 'StatsWidgetFilter',
  selectedId: 1,
};

export default () => (
  <Container>
    <div data-hook="card-example" className={styles.statsWidgetWrapper}>
      <StatsWidget
        title="Let's see what's going on with your store"
        statistics={statistics}
      >
        <StatsWidget.Filter
          selectedId={1}
          onSelect={onFilterChange}
          {...ButtonWithOptionsProps}
        >
          <ButtonWithOptions.Button />
          {optionsArray}
        </StatsWidget.Filter>
        <StatsWidget.Filter
          selectedId={1}
          onSelect={onFilterChange}
          {...ButtonWithOptionsProps}
        >
          <ButtonWithOptions.Button />
          {optionsArray}
        </StatsWidget.Filter>
      </StatsWidget>
    </div>
  </Container>
);
