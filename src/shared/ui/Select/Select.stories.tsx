import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './Select';

const meta = {
  title: 'shared/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    name: 'test',
    options: [
      {
        id: 1,
        name: 'Lawyer',
      },
      {
        id: 2,
        name: 'Content manager',
      },
      {
        id: 3,
        name: 'Security',
      },
      {
        id: 4,
        name: 'Designer',
      },
    ],
  },
};
