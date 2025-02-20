import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { FormControlLabel, Checkbox, FormControlLabelProps as MUIFormControlLabelProps } from '@mui/material';

export interface FormControlLabelProps extends MUIFormControlLabelProps {
  label: string;
  control: React.ReactElement;
  disabled?: boolean;
}

export default {
  title: 'MUI/MUIFormControlLabel',
  component: FormControlLabel,
  argTypes: {
    label: {
      control: 'text',
      description: 'The label text to display next to the control',
    },
    control: {
      table: {
        disable: true,
      },
      description: 'The control element (e.g., Checkbox, Switch, etc.)',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the control is disabled',
    },
  },
} as Meta<typeof FormControlLabel>;

const Template: StoryFn<typeof FormControlLabel> = (args) => {
  const { label, control, disabled } = args;
  return <FormControlLabel label={label} control={control} disabled={disabled} />;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Default Label',
  control: <Checkbox />,
  disabled: false,
};

export const DisabledLabel = Template.bind({});
DisabledLabel.args = {
  label: 'Disabled Label',
  control: <Checkbox />,
  disabled: true,
};

export const WithSwitch = Template.bind({});
WithSwitch.args = {
  label: 'Switch Label',
  control: <Checkbox />, // Replace with <Switch /> if using Switch component
  disabled: false,
};
