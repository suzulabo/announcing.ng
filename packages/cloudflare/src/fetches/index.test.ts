import { indexHandler } from '.';

it('basic', async () => {
  const req = new Request('http://localhost/');
  const res = await indexHandler(req);
  expect(await res.text()).toBe('hello');
});
