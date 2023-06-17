import { createClient } from '@sanity/client';

export function createSanityClient() {
  return createClient({
    projectId: '1d6jsboj',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2023-06-03',
  });
}
