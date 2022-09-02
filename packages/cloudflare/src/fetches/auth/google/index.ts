import { FetchHandler } from '@/common/FetchMatch';

export const authGoogleIndexHandler: FetchHandler = (
  req,
  _params,
  workerEnv
) => {
  // https://developers.google.com/identity/protocols/oauth2/openid-connect#sendauthrequest

  // TODO: Add state

  return Response.redirect(
    `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&scope=openid&prompt=select_account&client_id=${
      workerEnv.AUTH_GOOGLE_CLIENT_ID
    }&redirect_uri=${encodeURIComponent(req.url + '/callback')}`,
    302
  );
};
