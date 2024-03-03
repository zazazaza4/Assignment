import type { Meta, StoryObj } from '@storybook/react';

import { AppLink } from './AppLink';

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  tags: ['autodocs'],
  args: {
    to: '#',
  },
  argTypes: {},
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
  args: {
    children: 'Text',
    theme: 'primary',
  },
};
