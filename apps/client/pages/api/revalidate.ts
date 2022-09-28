import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message: string;
  revalidated?: boolean;
  error?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
  //   return res.status(401).json({ message: 'Invalid token' });
  // }

  let path = req.query.path ?? '/';

  try {
    if (Array.isArray(path)) {
      path.forEach(async (x) => await res.revalidate(x));
      return res.json({
        message: `Revalidated successfully paths [${path.join(', ')}]`,
        revalidated: true,
      });
    }

    await res.revalidate(path);
    return res.json({
      message: `Revalidated successfully path '${path}'`,
      revalidated: true,
    });
  } catch (err) {
    return res.status(500).json({ message: 'Error revalidating', error: err });
  }
}
