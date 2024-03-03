import type { Meta, StoryObj } from '@storybook/react';

import AvatarImg from '@/shared/assets/test/storybook.png';

import { Avatar } from './Avatar';

const meta = {
  title: 'shared/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    src: AvatarImg,
    alt: 'test',
  },
  argTypes: {},
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
  args: {
    size: 150,
  },
};

export const Small: Story = {
  args: {
    size: 50,
  },
};
