import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Badge, BadgeProps as MUIBadgeProps, IconButton } from '@mui/material';
import { Mail as MailIcon } from '@mui/icons-material';

export interface BadgeProps extends MUIBadgeProps {
  badgeContent: number;
  color?: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  invisible?: boolean;
  max?: number;
  showZero?: boolean;
}

export default {
  title: 'MUI/MUIBadge',
  component: Badge,
  argTypes: {
    badgeContent: {
      control: 'number',
      description: 'The content displayed within the badge',
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'error', 'info', 'success', 'warning'],
      description: 'The color of the badge',
    },
    invisible: {
      control: 'boolean',
      description: 'Whether the badge is invisible when empty',
    },
    max: {
      control: 'number',
      description: 'The maximum number to display',
    },
    showZero: {
      control: 'boolean',
      description: 'Whether to show the badge when the content is zero',
    },
  },
} as Meta<typeof Badge>;

const Template: StoryFn<typeof Badge> = (args) => {
  const { badgeContent, color, invisible, max, showZero } = args;
  return (
    <Badge
      badgeContent={badgeContent}
      color={color}
      invisible={invisible}
      max={max}
      showZero={showZero}
    >
      <IconButton>
        <MailIcon />
      </IconButton>
    </Badge>
  );
};

export const Default = Template.bind({});
Default.args = {
  badgeContent: 4,
  color: 'primary',
  invisible: false,
  max: 99,
  showZero: false,
};

export const InvisibleBadge = Template.bind({});
InvisibleBadge.args = {
  badgeContent: 0,
  color: 'secondary',
  invisible: true,
  max: 99,
  showZero: false,
};

export const ShowZeroBadge = Template.bind({});
ShowZeroBadge.args = {
  badgeContent: 0,
  color: 'error',
  invisible: false,
  max: 99,
  showZero: true,
};

export const MaxValueBadge = Template.bind({});
MaxValueBadge.args = {
  badgeContent: 150,
  color: 'success',
  invisible: false,
  max: 99,
  showZero: false,
};
