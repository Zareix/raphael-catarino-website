import type { APIRoute } from 'astro';

export const prerender = false;

export const post: APIRoute = async ({ request }) => {
  if (request.headers.get('Content-Type') !== 'application/json') {
    return new Response(null, { status: 400 });
  }

  const body = await request.json();
  const { name, email, message } = body;
  console.log({ name, email, message });

  return new Response(
    JSON.stringify({
      success: true,
    }),
    {
      status: 200,
    },
  );
};
