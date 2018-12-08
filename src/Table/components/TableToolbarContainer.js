import React from 'react';
import { any } from 'prop-types';
import {
  BulkSelectionConsumer,
  BulkSelectionContextPropTypes,
} from '../BulkSelection';

export const TableToolbarContainer = props => {
  return (
    <BulkSelectionConsumer
      consumerCompName="Table.ToolbarContainer"
      providerCompName="Table"
    >
      {props.children}
    </BulkSelectionConsumer>
  );
};
TableToolbarContainer.displayName = 'Table.ToolbarContainer';
TableToolbarContainer.propTypes = {
  children: any,
};

/** Helper for PropTypes for componenst which consume the SelectioContext */
export const SelectionContextPropTypes = BulkSelectionContextPropTypes;
