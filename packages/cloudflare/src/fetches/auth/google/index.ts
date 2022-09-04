import { FetchHandler } from '@/common/FetchMatch';
import { getRequestHash } from '@/common/RequestHash';
import { base64url, SignJWT } from 'jose';

export const authGoogleIndexHandler: FetchHandler = async (
  req,
  _params,
  workerEnv
) => {
  // https://developers.google.com/identity/protocols/oauth2/openid-connect#sendauthrequest

  const url = new URL(req.url);

  const reqHash = await getRequestHash(req);
  const jwt = await new SignJWT({})
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setIssuer(url.origin)
    .setAudience(`urn:reqhash:${base64url.encode(reqHash)}`)
    .setExpirationTime('10m')
    .sign(base64url.decode(workerEnv.HS256_SIGN_KEY));

  return Response.redirect(
    `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&scope=openid&prompt=select_account&client_id=${
      workerEnv.AUTH_GOOGLE_CLIENT_ID
    }&redirect_uri=${encodeURIComponent(req.url + '/callback')}&state=${jwt}`,
    302
  );
};
