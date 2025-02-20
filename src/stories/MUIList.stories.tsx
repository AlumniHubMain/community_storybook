import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { List, ListItem, ListItemText, ListProps as MUIListProps } from '@mui/material';

export interface ListProps extends MUIListProps {
  items: { primary: string; secondary?: string }[];
  dense?: boolean;
  disablePadding?: boolean;
}

export default {
  title: 'MUI/MUIList',
  component: List,
  argTypes: {
    items: {
      control: 'object',
      description: 'The items to display in the list',
    },
    dense: {
      control: 'boolean',
      description: 'Whether the list should be dense',
    },
    disablePadding: {
      control: 'boolean',
      description: 'Whether padding should be disabled on the list',
    },
  },
} as Meta<typeof List>;

const Template: StoryFn = (args: any) => {
  const { items, dense, disablePadding } = args;
  return (
    <List dense={dense} disablePadding={disablePadding}>
      {items.map((item: any, index: any) => (
        <ListItem key={index}>
          <ListItemText primary={item.primary} secondary={item.secondary} />
        </ListItem>
      ))}
    </List>
  );
};

export const Default = Template.bind({});
Default.args = {
  items: [
    { primary: 'Item 1', secondary: 'Details for item 1' },
    { primary: 'Item 2', secondary: 'Details for item 2' },
    { primary: 'Item 3', secondary: 'Details for item 3' },
  ],
  dense: false,
  disablePadding: false,
};

export const DenseList = Template.bind({});
DenseList.args = {
  items: [
    { primary: 'Item 1', secondary: 'Details for item 1' },
    { primary: 'Item 2', secondary: 'Details for item 2' },
    { primary: 'Item 3', secondary: 'Details for item 3' },
  ],
  dense: true,
  disablePadding: false,
};

export const NoPaddingList = Template.bind({});
NoPaddingList.args = {
  items: [
    { primary: 'Item 1', secondary: 'Details for item 1' },
    { primary: 'Item 2', secondary: 'Details for item 2' },
    { primary: 'Item 3', secondary: 'Details for item 3' },
  ],
  dense: false,
  disablePadding: true,
};
