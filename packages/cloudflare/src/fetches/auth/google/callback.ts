import { FetchHandler } from '@/common/FetchMatch';

export const authGoogleCallbackHandler: FetchHandler = (req) => {
  const url = new URL(req.url);

  return new Response('google callback: ' + url.searchParams.get('code'));
};
