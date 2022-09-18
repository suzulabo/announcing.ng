import { WorkerEnv } from '@/common/WorkerEnv';
import main from '@/main';

it('basic', async () => {
  const req = new Request('http://localhost/');
  const res = await main.fetch(req, {} as WorkerEnv);
  expect(await res.text()).toContain('hello');
});
