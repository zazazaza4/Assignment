import type { Meta, StoryObj } from '@storybook/react';

import { User } from '../../model/types/user';
import { UserList } from './UserList';

const users: User[] = [
  {
    id: '20202',
    name: 'qweqweqwe',
    email: 'kasda@gmail.com',
    phone: '380961052225',
    position: 'Content manager',
    position_id: 2,
    registration_timestamp: 1709467089,
    photo:
      'https://frontend-test-assignment-api.abz.agency/images/users/65e465d1d0a8020202.jpg',
  },
  {
    id: '20201',
    name: 'Oleksandr Marochkanych',
    email: 'gale249@gmail.com',
    phone: '+380999999999',
    position: 'Security',
    position_id: 3,
    registration_timestamp: 1709465689,
    photo:
      'https://frontend-test-assignment-api.abz.agency/images/users/65e4605937e4020201.JPG',
  },
  {
    id: '20200',
    name: 'qweqwe',
    email: 'qwera@gmail.com',
    phone: '380922858245',
    position: 'Security',
    position_id: 3,
    registration_timestamp: 1709458221,
    photo:
      'https://frontend-test-assignment-api.abz.agency/images/users/65e4432df3bd520200.jpg',
  },
  {
    id: '20199',
    name: 'fff',
    email: 'dfbddddddb@gmail.com',
    phone: '+380638471686',
    position: 'Security',
    position_id: 3,
    registration_timestamp: 1709457933,
    photo:
      'https://frontend-test-assignment-api.abz.agency/images/users/65e4420d945e520199.jpg',
  },
];

const meta = {
  title: 'entities/User/UserList',
  component: UserList,
  tags: ['autodocs'],
  args: {},
  argTypes: {},
} satisfies Meta<typeof UserList>;

export default meta;
type Story = StoryObj<typeof UserList>;

export const Primary: Story = {
  args: {
    users,
  },
};
