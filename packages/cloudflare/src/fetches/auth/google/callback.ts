import { BadRequestResponse } from '@/common/BadRequestResponse';
import { FetchHandler } from '@/common/FetchMatch';
import { createRemoteJWKSet, jwtVerify } from 'jose';

const JWKS = createRemoteJWKSet(
  new URL('https://www.googleapis.com/oauth2/v3/certs')
);

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

  const json = (await res.json()) as { id_token: string };
  const jwt = json.id_token;

  const { payload, protectedHeader } = await jwtVerify(jwt, JWKS, {
    issuer: 'https://accounts.google.com',
    audience: env.AUTH_GOOGLE_CLIENT_ID,
  });
  return new Response(
    JSON.stringify({ payload, protectedHeader }, undefined, 2)
  );
};
