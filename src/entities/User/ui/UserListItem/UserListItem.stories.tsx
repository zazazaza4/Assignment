import type { Meta, StoryObj } from '@storybook/react';

import { User } from '../../model/types/user';
import { UserListItem } from './UserListItem';

const user: User = {
  id: '20202',
  name: 'qweqweqwe',
  email: 'kasda@gmail.com',
  phone: '380961052225',
  position: 'Content manager',
  position_id: 2,
  registration_timestamp: 1709467089,
  photo:
    'https://frontend-test-assignment-api.abz.agency/images/users/65e465d1d0a8020202.jpg',
};

const meta = {
  title: 'entities/User/UserListItem',
  component: UserListItem,
  tags: ['autodocs'],
  args: {},
  argTypes: {},
} satisfies Meta<typeof UserListItem>;

export default meta;
type Story = StoryObj<typeof UserListItem>;

export const Primary: Story = {
  args: {
    user,
  },
};
