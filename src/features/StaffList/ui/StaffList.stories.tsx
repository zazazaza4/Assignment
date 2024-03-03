import type { Meta, StoryObj } from '@storybook/react';

import { StaffList } from './StaffList';

const meta = {
  title: 'features/StaffList',
  component: StaffList,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof StaffList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
