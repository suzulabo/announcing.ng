import { FetchHandler } from '../common/FetchMatch';

export const indexHandler: FetchHandler = () => {
  return new Response('hello');
};
