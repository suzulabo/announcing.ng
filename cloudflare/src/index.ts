const fetch = async (request: Request) => {
  return Promise.resolve(new Response(`hihi: ${request.url}`));
};

export default { fetch };
