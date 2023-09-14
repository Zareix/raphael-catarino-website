import type { APIRoute } from 'astro';
import { type ZodError, z } from 'zod';
import { env } from '~/lib/env';

export const prerender = false;

const contactSchema = z.object({
  name: z.string().nonempty("Name can't be empty"),
  email: z.string().email('Email is invalid'),
  message: z.string().nonempty("Message can't be empty"),
});

export const post: APIRoute = async ({ request }) => {
  if (request.headers.get('Content-Type') !== 'application/json') {
    return new Response(null, { status: 400 });
  }

  const body = await request.json();
  const { name, email, message } = body;

  try {
    contactSchema.parse({ name, email, message });
  } catch (err) {
    return new Response(
      JSON.stringify({
        success: false,
        error: (err as ZodError).issues
          .map((issue) => issue.message)
          .join('. ')
          .concat('.'),
      }),
      {
        status: 400,
      },
    );
  }

  const msg = {
    to: env.EMAIL_TO,
    from: {
      email: env.EMAIL_FROM,
    },
    subject: 'New message from raphael-catarino.fr',
    personalizations: [
      {
        from: {
          email: env.EMAIL_FROM,
        },
        to: [
          {
            email: env.EMAIL_TO,
          },
        ],
      },
    ],
    content: [
      {
        type: 'text/html',
        value: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
      `,
      },
    ],
  };

  try {
    const res = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(msg),
    });
    if (res.status !== 202) {
      console.error(await res.text());
      return new Response(
        JSON.stringify({
          success: false,
          error: 'An error occured while sending the email',
        }),
        {
          status: 500,
        },
      );
    }
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({
        success: false,
        error: 'An error occured while sending the email',
      }),
      {
        status: 500,
      },
    );
  }

  return new Response(
    JSON.stringify({
      success: true,
    }),
    {
      status: 200,
    },
  );
};
