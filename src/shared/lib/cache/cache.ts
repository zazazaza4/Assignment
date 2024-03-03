const CACHE_PREFIX = 'Cache_';

export const setCache = async <T>(
  key: string,
  data: T,
  ttl: number
): Promise<void> => {
  const cacheKey = `${CACHE_PREFIX}${key}`;

  const cache = await caches.open(cacheKey);
  const cacheData = new Response(JSON.stringify(data), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': `max-age=${ttl / 1000}`,
    },
  });

  await cache.put(cacheKey, cacheData);
};

export const getCache = async <T>(key: string): Promise<T | null> => {
  const cacheKey = `${CACHE_PREFIX}${key}`;

  const cache = await caches.open(cacheKey);
  const cachedResponse = await cache.match(cacheKey);

  if (cachedResponse) {
    const cachedData = await cachedResponse.json();
    return cachedData as T;
  }

  return null;
};
