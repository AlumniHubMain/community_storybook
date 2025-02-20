import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Checkbox as MUICheckbox, CheckboxProps as MUICheckboxProps, FormControlLabel } from '@mui/material';

export interface CheckboxProps extends MUICheckboxProps {
  label?: string;
}

export default {
  title: 'MUI/MUICheckbox',
  component: MUICheckbox,
  argTypes: {
    checked: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'error', 'info', 'success', 'warning'],
    },
    label: { control: 'text' },
    onChange: { action: 'changed' },
  },
} as Meta<typeof MUICheckbox>;

const Template = (args: any) => {
  const { label, ...checkboxProps } = args;
  return (
    <FormControlLabel
      control={<MUICheckbox {...checkboxProps} />}
      label={label || ''}
    />
  );
};
export const Default: StoryFn<CheckboxProps> = Template.bind({});
Default.args = {
  checked: false,
  disabled: false,
  color: 'primary',
  label: 'Default Checkbox',
};
export const Checked: StoryFn<CheckboxProps> = Template.bind({});
Checked.args = {
  checked: true,
  disabled: false,
  color: 'primary',
  label: 'Checked Checkbox',
};
export const Disabled: StoryFn<CheckboxProps> = Template.bind({});
Disabled.args = {
  checked: false,
  disabled: true,
  color: 'secondary',
  label: 'Disabled Checkbox',
};
export const Colored: StoryFn<CheckboxProps> = Template.bind({});
Colored.args = {
  checked: true,
  disabled: false,
  color: 'success',
  label: 'Success Checkbox',
};
