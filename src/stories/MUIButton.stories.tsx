import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Button as MUIButton, ButtonProps as MUIButtonProps } from '@mui/material';

export interface ButtonProps extends MUIButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export default {
  title: 'MUI/MUIButton',
  component: MUIButton,
  argTypes: {
    variant: {
      control: 'select',
      options: ['contained', 'text', 'outlined',]
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'error', 'info', 'warning']
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large']
    },
    children: { control: 'text' },
    onClick: { action: 'clicked' }
  }
} as Meta<typeof MUIButton>;

const Template: StoryFn<typeof MUIButton> = (args) => {
  const { children, variant, color, size } = args;
  return <MUIButton variant={variant} color={color} size={size}>{children}</MUIButton>;
};

export const Default = Template.bind({});
Default.args = {
  variant: 'contained',
  color: 'primary',
  size: 'medium',
  children: 'Click Me'
};

export const TextButton = Template.bind({});
TextButton.args = {
  variant: 'text',
  color: 'secondary',
  size: 'medium',
  children: 'Text Button'
};

export const OutlinedButton = Template.bind({});
OutlinedButton.args = {
  variant: 'outlined',
  color: 'success',
  size: 'large',
  children: 'Outlined Button'
};
