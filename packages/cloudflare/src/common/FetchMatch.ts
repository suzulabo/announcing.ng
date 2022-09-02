import { Match, MatchParams } from '@announcing/shared';
import { WorkerEnv } from './WorkerEnv';

export type FetchHandler = (
  request: Request,
  params?: MatchParams,
  workerEnv?: WorkerEnv
) => Response | Promise<Response>;

export type FetchMatch = Match & {
  handle?: FetchHandler;
};
