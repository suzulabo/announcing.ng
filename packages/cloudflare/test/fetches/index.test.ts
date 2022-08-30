import main from '../../src/index';

it('basic', async () => {
  const req = new Request('http://localhost/');
  const res = await main.fetch(req);
  expect(await res.text()).toBe('hello');
});
