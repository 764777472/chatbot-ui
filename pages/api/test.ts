import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  status: number,
  info: string
}

export default function handler (req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ status: 200, info: 'ok' })
}