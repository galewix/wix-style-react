import React from 'react';
import { bool, string } from 'prop-types';
import DataTable from '../../DataTable';
import { getDataTableProps, createColumns } from '../Table';
import { TableContext } from '../TableContext';

import { BulkSelectionConsumer } from '../BulkSelection';

export const TableContent = ({ titleBarVisible, dataHook }) => {
  //TODO: figure out if we need to put result of createColumns() on state, in order to avoid
  // redundant renders.
  return (
    <TableContext.Consumer>
      {tableProps => {
        const dataTableProps = {
          ...getDataTableProps(tableProps),
          dataHook: tableProps.withWrapper ? 'table-content' : dataHook,
          hideHeader: !titleBarVisible,
        };

        if (tableProps.showSelection) {
          return (
            <BulkSelectionConsumer
              consumerCompName="Table.Content"
              providerCompName="Table"
            >
              {bulkSelectionContext => (
                <DataTable
                  {...dataTableProps}
                  columns={createColumns({ tableProps, bulkSelectionContext })}
                />
              )}
            </BulkSelectionConsumer>
          );
        } else {
          return <DataTable {...dataTableProps} />;
        }
      }}
    </TableContext.Consumer>
  );
};
TableContent.displayName = 'Table.Content';
TableContent.propTypes = {
  titleBarVisible: bool,
  dataHook: string,
};
TableContent.defaultProps = {
  titleBarVisible: true,
};
