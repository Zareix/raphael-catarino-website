import { ActionError, defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import { env } from '~/lib/env';

export const server = {
  submitContact: defineAction({
    input: z.object({
      name: z.string().min(1, "Name can't be empty"),
      email: z.string().email('Email is invalid'),
      message: z.string().min(1, "Message can't be empty"),
    }),
    handler: async (input) => {
      const { name, email, message } = input;

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
          throw new ActionError({
            code: 'INTERNAL_SERVER_ERROR',
          });
        }
      } catch (error) {
        console.error(error);
        throw new ActionError({
          code: 'INTERNAL_SERVER_ERROR',
        });
      }
    },
  }),
};
