import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { List, ListItemButton, ListItemText, ListProps as MUIListProps, ListItemButtonProps as MUIListItemButtonProps } from '@mui/material';

export interface ListProps extends MUIListProps {
  items: { primary: string; secondary?: string; onClick?: () => void }[];
  dense?: boolean;
  disablePadding?: boolean;
}

export interface ListItemButtonProps extends MUIListItemButtonProps {
  primary: string;
  secondary?: string;
  onClick?: () => void;
}

export default {
  title: 'MUI/MUIListWithButtons',
  component: List,
  argTypes: {
    items: {
      control: 'object',
      description: 'The items to display in the list, each with optional onClick handlers',
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

const Template = (args: any) => {
  const { items, dense, disablePadding } = args;
  return (
    <List dense={dense} disablePadding={disablePadding}>
      {items.map((item: any, index: any) => (
        <ListItemButton key={index} onClick={item.onClick}>
          <ListItemText primary={item.primary} secondary={item.secondary} />
        </ListItemButton>
      ))}
    </List>
  );
};
export const Default: StoryFn<ListProps> = Template.bind({});
Default.args = {
  items: [
    { primary: 'Button Item 1', secondary: 'Details for item 1', onClick: () => alert('Clicked Item 1') },
    { primary: 'Button Item 2', secondary: 'Details for item 2', onClick: () => alert('Clicked Item 2') },
    { primary: 'Button Item 3', secondary: 'Details for item 3', onClick: () => alert('Clicked Item 3') },
  ],
  dense: false,
  disablePadding: false,
};
export const DenseList: StoryFn<ListProps> = Template.bind({});
DenseList.args = {
  items: [
    { primary: 'Button Item 1', secondary: 'Details for item 1', onClick: () => alert('Clicked Item 1') },
    { primary: 'Button Item 2', secondary: 'Details for item 2', onClick: () => alert('Clicked Item 2') },
    { primary: 'Button Item 3', secondary: 'Details for item 3', onClick: () => alert('Clicked Item 3') },
  ],
  dense: true,
  disablePadding: false,
};
export const NoPaddingList: StoryFn<ListProps> = Template.bind({});
NoPaddingList.args = {
  items: [
    { primary: 'Button Item 1', secondary: 'Details for item 1', onClick: () => alert('Clicked Item 1') },
    { primary: 'Button Item 2', secondary: 'Details for item 2', onClick: () => alert('Clicked Item 2') },
    { primary: 'Button Item 3', secondary: 'Details for item 3', onClick: () => alert('Clicked Item 3') },
  ],
  dense: false,
  disablePadding: true,
};
