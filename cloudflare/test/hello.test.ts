import handleFetch from '../src/index';

describe('hello', () => {
  it('basic', async () => {
    const req = new Request('http://localhost/test');
    const res = await handleFetch(req);
    expect(await res.text()).toBe('hihi: http://localhost/test');
  });
});
