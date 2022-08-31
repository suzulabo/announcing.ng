import { FetchHandler } from '@/common/FetchMatch';

export const authGoogleIndexHandler: FetchHandler = (
  req,
  _params,
  workerEnv
) => {
  return Response.redirect(
    `https://accounts.google.com/o/oauth2/auth?response_type=code&scope=openid%20profile&prompt=select_account&client_id=${
      workerEnv.AUTH_GOOGLE_CLIENT_ID
    }&redirect_uri=${encodeURIComponent(req.url + '/callback')}`,
    302
  );
};
