import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { TextField, TextFieldProps as MUITextFieldProps } from '@mui/material';

export interface TextFieldProps {
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
}

export default {
  title: 'MUI/MUITextField',
  component: TextField,
  argTypes: {
    label: {
      control: 'text',
      description: 'Label for the text field',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the text field is disabled',
    },
    error: {
      control: 'boolean',
      description: 'Whether the text field is in an error state',
    },
    helperText: {
      control: 'text',
      description: 'Helper text to display below the text field',
    },
    variant: {
      control: 'select',
      options: ['filled', 'outlined', 'standard'],
      description: 'The variant to use',
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
      description: 'The size of the text field',
    },
  },
} as Meta<typeof TextField>;

const Template = (args: any) => {
  const { label, placeholder, disabled, error, helperText, variant, size } = args;
  return (
    <TextField
      label={label}
      placeholder={placeholder}
      disabled={disabled}
      error={error}
      helperText={helperText}
      variant={variant}
      size={size}
    />
  );
};
export const Default: any = Template.bind({});
Default.args = {
  label: 'Default Label',
  placeholder: 'Type here...',
  disabled: false,
  error: false,
  helperText: '',
  variant: 'outlined',
  size: 'medium',
};
export const ErrorTextField: any = Template.bind({});
ErrorTextField.args = {
  label: 'Error Label',
  placeholder: 'Type here...',
  disabled: false,
  error: true,
  helperText: 'Error: Invalid input',
  variant: 'outlined',
  size: 'medium',
};
export const DisabledTextField: any = Template.bind({});
DisabledTextField.args = {
  label: 'Disabled Label',
  placeholder: 'Type here...',
  disabled: true,
  error: false,
  helperText: '',
  variant: 'outlined',
  size: 'medium',
};
