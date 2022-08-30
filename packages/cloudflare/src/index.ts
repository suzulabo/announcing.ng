import { pathMatcher } from '@announcing/shared';
import { FetchMatch } from './common/FetchMatch';
import { indexHandler } from './fetches';

const matches: FetchMatch[] = [
  {
    pattern: '',
    handle: indexHandler,
  },
];

const fetch = (request: Request) => {
  const m = pathMatcher(matches, new URL(request.url).pathname);
  if (m) {
    return m.match.handle(request, m.params);
  } else {
    return new Response('not found', { status: 404 });
  }
};

export default { fetch };
