import type { Meta, StoryObj } from '@storybook/react';

import { Logo } from './Logo';

const meta = {
  title: 'shared/Logo',
  component: Logo,
  tags: ['autodocs'],
  args: {},
  argTypes: {},
} as Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof Logo>;

export const Primary: Story = {};
