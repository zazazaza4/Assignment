import type { Meta, StoryObj } from '@storybook/react';

import { Upload } from './Upload';

const meta = {
  title: 'shared/Upload',
  component: Upload,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Upload>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    name: 'test',
  },
};
