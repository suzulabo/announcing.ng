import { Match, MatchParams } from '@announcing/shared';

export type FetchHandler = (
  request: Request,
  params: MatchParams
) => Response | Promise<Response>;

export type FetchMatch = Match & {
  handle: FetchHandler;
};
