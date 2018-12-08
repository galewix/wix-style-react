import React from 'react';
import { node } from 'prop-types';
import { Toolbar, ItemGroup, Item, Label, Divider } from './Toolbar';
import Heading from '../Heading';
import Text from '../Text';

export const Title = props => {
  return <Heading appearance="H3">{props.children}</Heading>;
};
Title.displayName = 'TableToolbar.Title';
Title.propTypes = {
  children: node,
};

export const SelectedCount = props => {
  return (
    <Text weight="normal" size="medium">
      {props.children}
    </Text>
  );
};
SelectedCount.displayName = 'TableToolbar.SelectedCount';
SelectedCount.propTypes = {
  children: node,
};

export const TableToolbar = Toolbar;

// Aliases for convenience
TableToolbar.ItemGroup = ItemGroup;
TableToolbar.Item = Item;
TableToolbar.Label = Label;
TableToolbar.SelectedCount = SelectedCount;
TableToolbar.Title = Title;
TableToolbar.Divider = Divider;
