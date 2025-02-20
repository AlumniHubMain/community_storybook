import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Radio as MUIRadio, RadioProps as MUIRadioProps } from '@mui/material';

export interface RadioProps extends MUIRadioProps {
  checked?: boolean;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default {
  title: 'MUI/MUIRadio',
  component: MUIRadio,
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Whether the radio button is checked',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the radio button is disabled',
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'error', 'info', 'success', 'warning'],
      description: 'The color of the radio button',
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
      description: 'The size of the radio button',
    },
    onChange: { action: 'changed' },
  },
} as Meta<typeof MUIRadio>;

const Template = (args: any) => {
  const { checked, disabled, color, size, onChange } = args;
  return (
    <MUIRadio
      checked={checked}
      disabled={disabled}
      color={color}
      size={size}
      onChange={onChange}
    />
  );
};
export const Default: StoryFn<typeof MUIRadio> = Template.bind({});
Default.args = {
  checked: false,
  disabled: false,
  color: 'primary',
  size: 'medium',
};
export const CheckedRadio: StoryFn<typeof MUIRadio> = Template.bind({});
CheckedRadio.args = {
  checked: true,
  disabled: false,
  color: 'secondary',
  size: 'medium',
};
export const DisabledRadio: StoryFn<typeof MUIRadio> = Template.bind({});
DisabledRadio.args = {
  checked: false,
  disabled: true,
  color: 'default',
  size: 'medium',
};
