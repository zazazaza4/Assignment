import { $api } from '@/shared/api/api';
import { getCache, setCache } from '@/shared/lib/cache/cache';

const CACHE_KEY = 'tokenCache';
const CACHE_TTL = 40 * 60 * 1000;

export const getToken = async () => {
  const cachedData = await getCache(CACHE_KEY);

  if (cachedData) {
    return cachedData;
  }

  const { data } = await $api.get(`/token`);
  const newToken = data.token;

  await setCache(CACHE_KEY, newToken, CACHE_TTL);

  return newToken;
};
