import { getToken } from '@/entities/Token';

import { $api } from '@/shared/api/api';

export const registerUser = async (userData: FormData) => {
  try {
    const Token = await getToken();

    const response = await $api.post('/users', userData, {
      headers: { Token },
    });

    return response.data;
  } catch (error) {
    throw new Error('Failed to register user');
  }
};
