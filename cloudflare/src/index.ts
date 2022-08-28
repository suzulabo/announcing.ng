const handleFetch = async (request: Request) => {
  return Promise.resolve(new Response(`hihi: ${request.url}`));
};

export default handleFetch;
