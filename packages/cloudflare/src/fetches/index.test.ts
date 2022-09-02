import { WorkerEnv } from '@/common/WorkerEnv';
import { indexHandler } from '.';

it('basic', async () => {
  const req = new Request('http://localhost/');
  const res = await indexHandler(req, {}, {} as WorkerEnv);
  expect(await res.text()).toBe('hello');
});
