import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Select, MenuItem, SelectProps as MUISelectProps } from '@mui/material';

export interface SelectProps {
  label?: string;
  options: { value: string; label: string }[];
  disabled?: boolean;
  error?: boolean;
}

export default {
  title: 'MUI/MUISelect',
  component: Select,
  argTypes: {
    label: {
      control: 'text',
      description: 'The label for the select component',
    },
    options: {
      control: 'object',
      description: 'The options to display in the dropdown',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the select is disabled',
    },
    error: {
      control: 'boolean',
      description: 'Whether the select is in an error state',
    },
  },
} as Meta<typeof Select>;

const Template = (args: any) => {
  const { label, options, disabled, error } = args;
  return (
    <div>
      {label && <label>{label}</label>}
      <Select disabled={disabled} error={error} fullWidth>
        {options.map((option: any) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};
export const Default: StoryFn<SelectProps> = Template.bind({});
Default.args = {
  label: 'Default Select',
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ],
  disabled: false,
  error: false,
};
export const ErrorSelect: StoryFn<SelectProps> = Template.bind({});
ErrorSelect.args = {
  label: 'Error Select',
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ],
  disabled: false,
  error: true,
};
export const DisabledSelect: StoryFn<SelectProps> = Template.bind({});
DisabledSelect.args = {
  label: 'Disabled Select',
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ],
  disabled: true,
  error: false,
};
