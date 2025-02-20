import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { List, ListItem, ListItemText, ListItemIcon, ListProps as MUIListProps } from '@mui/material';
import { Inbox as InboxIcon, Mail as MailIcon } from '@mui/icons-material';

export interface ListProps extends MUIListProps {
  items: { primary: string; secondary?: string; icon: React.ReactElement }[];
  dense?: boolean;
  disablePadding?: boolean;
}

export default {
  title: 'MUI/MUIListWithIcons',
  component: List,
  argTypes: {
    items: {
      control: 'object',
      description: 'The items to display in the list, each with an icon',
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
        <ListItem key={index}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.primary} secondary={item.secondary} />
        </ListItem>
      ))}
    </List>
  );
};
export const Default: any = Template.bind({});
Default.args = {
  items: [
    { primary: 'Inbox', secondary: 'Details for Inbox', icon: <InboxIcon /> },
    { primary: 'Sent Mail', secondary: 'Details for Sent Mail', icon: <MailIcon /> },
    { primary: 'Drafts', secondary: 'Details for Drafts', icon: <InboxIcon /> },
  ],
  dense: false,
  disablePadding: false,
};
export const DenseList: any = Template.bind({});
DenseList.args = {
  items: [
    { primary: 'Inbox', secondary: 'Details for Inbox', icon: <InboxIcon /> },
    { primary: 'Sent Mail', secondary: 'Details for Sent Mail', icon: <MailIcon /> },
    { primary: 'Drafts', secondary: 'Details for Drafts', icon: <InboxIcon /> },
  ],
  dense: true,
  disablePadding: false,
};
export const NoPaddingList: any = Template.bind({});
NoPaddingList.args = {
  items: [
    { primary: 'Inbox', secondary: 'Details for Inbox', icon: <InboxIcon /> },
    { primary: 'Sent Mail', secondary: 'Details for Sent Mail', icon: <MailIcon /> },
    { primary: 'Drafts', secondary: 'Details for Drafts', icon: <InboxIcon /> },
  ],
  dense: false,
  disablePadding: true,
};
