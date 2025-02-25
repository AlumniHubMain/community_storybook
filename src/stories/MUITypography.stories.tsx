import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Typography, TypographyProps as MUITypographyProps } from '@mui/material';

export interface TypographyProps extends MUITypographyProps {
  children: React.ReactNode;
}

export default {
  title: 'MUI/MUITypography',
  component: Typography,
  argTypes: {
    children: {
      control: 'text',
      description: 'The text content to display',
    },
    variant: {
      control: 'select',
      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'subtitle1',
        'subtitle2',
        'body1',
        'body2',
        'caption',
        'button',
        'overline',
      ],
      description: 'The typography variant to use',
    },
    align: {
      control: 'select',
      options: ['inherit', 'left', 'center', 'right', 'justify'],
      description: 'Set the text-align on the typography',
    },
    color: {
      control: 'select',
      options: [
        'initial',
        'inherit',
        'primary',
        'secondary',
        'textPrimary',
        'textSecondary',
        'error',
      ],
      description: 'Set the color of the typography',
    },
    gutterBottom: {
      control: 'boolean',
      description: 'If true, the text will have a bottom margin',
    },
  },
} as Meta<typeof Typography>;

const Template = (args: any) => {
  const { children, variant, align, color, gutterBottom } = args;
  return (
    <Typography variant={variant} align={align} color={color} gutterBottom={gutterBottom}>
      {children}
    </Typography>
  );
};
export const Default: StoryFn<typeof Typography> = Template.bind({});
Default.args = {
  children: 'Default Typography',
  variant: 'body1',
  align: 'inherit',
  color: 'initial',
  gutterBottom: false,
};
export const Heading: StoryFn<typeof Typography> = Template.bind({});
Heading.args = {
  children: 'Heading Typography',
  variant: 'h4',
  align: 'center',
  color: 'primary',
  gutterBottom: true,
};
export const Subtitle: StoryFn<typeof Typography> = Template.bind({});
Subtitle.args = {
  children: 'Subtitle Typography',
  variant: 'subtitle1',
  align: 'left',
  color: 'secondary',
  gutterBottom: false,
};
export const Caption: StoryFn<typeof Typography> = Template.bind({});
Caption.args = {
  children: 'Caption Text',
  variant: 'caption',
  align: 'right',
  color: 'textSecondary',
  gutterBottom: false,
};
