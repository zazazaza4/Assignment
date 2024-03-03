import type { Meta, StoryObj } from '@storybook/react';

import { Text } from '../Text/Text';
import { Card } from './Card';

const meta = {
  title: 'shared/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    children: <Text title="Card" text="text" />,
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};
