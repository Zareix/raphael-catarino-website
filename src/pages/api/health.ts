import type { APIRoute } from 'astro';

export const prerender = false;

export const get: APIRoute = async () => {
  return new Response(
    JSON.stringify({
      healthy: true,
    }),
    {
      status: 200,
    },
  );
};
