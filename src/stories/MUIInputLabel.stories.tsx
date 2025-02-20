import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { InputLabel, InputLabelProps as MUIInputLabelProps } from '@mui/material';

export interface InputLabelProps extends MUIInputLabelProps {
  children: React.ReactNode;
  htmlFor?: string;
  required?: boolean;
  error?: boolean;
  disabled?: boolean;
}

export default {
  title: 'MUI/MUIInputLabel',
  component: InputLabel,
  argTypes: {
    children: {
      control: 'text',
      description: 'The text of the label',
    },
    htmlFor: {
      control: 'text',
      description: 'The ID of the input element the label is for',
    },
    required: {
      control: 'boolean',
      description: 'Whether the label should display a required asterisk',
    },
    error: {
      control: 'boolean',
      description: 'Whether the label indicates an error state',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the label is disabled',
    },
  },
} as Meta<typeof InputLabel>;

const Template: StoryFn<typeof InputLabel> = (args) => {
  const { children, htmlFor, required, error, disabled } = args;
  return (
    <InputLabel htmlFor={htmlFor} required={required} error={error} disabled={disabled}>
      {children}
    </InputLabel>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: 'Default Label',
  htmlFor: 'default-input',
  required: false,
  error: false,
  disabled: false,
};

export const RequiredLabel = Template.bind({});
RequiredLabel.args = {
  children: 'Required Label',
  htmlFor: 'required-input',
  required: true,
  error: false,
  disabled: false,
};

export const ErrorLabel = Template.bind({});
ErrorLabel.args = {
  children: 'Error Label',
  htmlFor: 'error-input',
  required: false,
  error: true,
  disabled: false,
};

export const DisabledLabel = Template.bind({});
DisabledLabel.args = {
  children: 'Disabled Label',
  htmlFor: 'disabled-input',
  required: false,
  error: false,
  disabled: true,
};
