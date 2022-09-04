import { FetchHandler } from '../common/FetchMatch';

export const indexHandler: FetchHandler = (req) => {
  return new Response(
    'hello\n\n' +
      [...req.headers.entries()].map(([k, v]) => {
        return `${k}: "${v}"\n`;
      })
  );
};
