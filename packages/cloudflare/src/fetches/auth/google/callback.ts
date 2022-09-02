import { BadRequestResponse } from '@/common/BadRequestResponse';
import { FetchHandler } from '@/common/FetchMatch';

export const authGoogleCallbackHandler: FetchHandler = async (
  req,
  _params,
  env
) => {
  // https://developers.google.com/identity/protocols/oauth2/openid-connect#exchangecode

  const url = new URL(req.url);
  const code = url.searchParams.get('code');
  if (!code) {
    return BadRequestResponse;
  }

  const formData = new FormData();
  formData.set('code', code);
  formData.set('client_id', env.AUTH_GOOGLE_CLIENT_ID);
  formData.set('client_secret', env.AUTH_GOOGLE_CLIENT_SECRET);
  formData.set('redirect_uri', url.origin + url.pathname);
  formData.set('grant_type', 'authorization_code');
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    body: formData,
  });

  const body = await res.text();

  console.log({ body });

  return new Response(body);
};
