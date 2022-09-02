import { pathMatcher } from '@announcing/shared';
import { FetchMatch } from './common/FetchMatch';
import { WorkerEnv } from './common/WorkerEnv';
import { indexHandler } from './fetches';
import { authGoogleIndexHandler } from './fetches/auth/google';
import { authGoogleCallbackHandler } from './fetches/auth/google/callback';

const matches: FetchMatch[] = [
  {
    pattern: '',
    handle: indexHandler,
  },
  {
    pattern: 'auth',
    nexts: [
      {
        pattern: 'google',
        handle: authGoogleIndexHandler,
        nexts: [
          {
            pattern: 'callback',
            handle: authGoogleCallbackHandler,
          },
        ],
      },
    ],
  },
];

const fetch = (request: Request, workerEnv: WorkerEnv) => {
  const m = pathMatcher(matches, new URL(request.url).pathname);
  if (m?.match.handle) {
    return m.match.handle(request, m.params, workerEnv);
  } else {
    return new Response('not found', { status: 404 });
  }
};

export default { fetch };
