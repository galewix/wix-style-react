import React from 'react';
import EmptyState from '../../EmptyState';

import style from '../Table.st.css';

export const TableEmptyState = props => (
  <div className={style.emptyStateContainer}>
    <EmptyState {...props} />
  </div>
);

TableEmptyState.displayName = 'Table.EmptyState';

TableEmptyState.propTypes = {
  ...EmptyState.propTypes,
};

TableEmptyState.defaultProps = {
  ...EmptyState.defaultProps,
};
