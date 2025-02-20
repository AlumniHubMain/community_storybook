import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Avatar, AvatarProps as MUIAvatarProps } from '@mui/material';

export interface AvatarProps extends MUIAvatarProps {
  alt?: string;
  src?: string;
  children?: React.ReactNode;
}

export default {
  title: 'MUI/MUIAvatar',
  component: Avatar,
  argTypes: {
    alt: {
      control: 'text',
      description: 'The alternative text describing the avatar',
    },
    src: {
      control: 'text',
      description: 'The URL of the image to display as the avatar',
    },
    children: {
      control: 'text',
      description: 'The content to display inside the avatar if no image is provided',
    },
    variant: {
      control: 'select',
      options: ['circular', 'rounded', 'square'],
      description: 'The variant to use for the avatar',
    },
  },
} as Meta<typeof Avatar>;

const Template: StoryFn<typeof Avatar> = (args: AvatarProps) => {
  const { alt, src, children, variant } = args;
  return (
    <Avatar alt={alt} src={src} variant={variant}>
      {children}
    </Avatar>
  );
};

export const Default = Template.bind({});
Default.args = {
  alt: 'Default Avatar',
  src: '',
  children: 'A',
  variant: 'circular',
};

export const ImageAvatar = Template.bind({});
ImageAvatar.args = {
  alt: 'User Avatar',
  src: '/150',
  children: '',
  variant: 'circular',
};

export const SquareAvatar = Template.bind({});
SquareAvatar.args = {
  alt: 'Square Avatar',
  src: '',
  children: 'S',
  variant: 'square',
};

export const RoundedAvatar = Template.bind({});
RoundedAvatar.args = {
  alt: 'Rounded Avatar',
  src: '',
  children: 'R',
  variant: 'rounded',
};
