const handler = async (req: Request): Promise<Response> => {
  const data = {
    status: 200,
    info: 'ok'
  }
  return new Response(JSON.stringify(data), { status: 200 });
};

export default handler;
