import type { Meta, StoryObj } from '@storybook/react';

import { AddUserForm } from './AddUserForm';

const meta = {
  title: 'features/AddUserForm',
  component: AddUserForm,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof AddUserForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
