import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ToggleButton, ToggleButtonProps as MUIToggleButtonProps } from '@mui/material';
import { FormatBold, FormatItalic, FormatUnderlined } from '@mui/icons-material';

export interface ToggleButtonProps extends MUIToggleButtonProps {
  value: string;
  children: React.ReactNode;
}

export default {
  title: 'MUI/MUIToggleButton',
  component: ToggleButton,
  argTypes: {
    value: {
      control: 'text',
      description: 'The value of the toggle button',
    },
    children: {
      control: 'text',
      description: 'The content inside the toggle button',
    },
    selected: {
      control: 'boolean',
      description: 'Whether the toggle button is selected',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the toggle button is disabled',
    },
  },
} as Meta<typeof ToggleButton>;

const Template = (args: any) => {
  const { value, children, selected, disabled } = args;
  return (
    <ToggleButton value={value} selected={selected} disabled={disabled}>
      {children}
    </ToggleButton>
  );
};
export const Default: StoryFn<typeof ToggleButton> = Template.bind({});
Default.args = {
  value: 'bold',
  children: <FormatBold />,
  selected: false,
  disabled: false,
};
export const SelectedToggleButton: StoryFn<typeof ToggleButton> = Template.bind({});
SelectedToggleButton.args = {
  value: 'italic',
  children: <FormatItalic />,
  selected: true,
  disabled: false,
};
export const DisabledToggleButton: StoryFn<typeof ToggleButton> = Template.bind({});
DisabledToggleButton.args = {
  value: 'underlined',
  children: <FormatUnderlined />,
  selected: false,
  disabled: true,
};
