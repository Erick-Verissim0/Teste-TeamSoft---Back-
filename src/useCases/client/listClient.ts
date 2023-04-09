import { Request, Response } from 'express';

import { Client } from '../../models/Client';

export async function listClient(req: Request, res: Response) {
  try {
    const client = await Client.find().populate('addresses.address');

    res.json(client);
  } catch (err: any) {
    res.status(500).json({ erro: err.message });
  }
}
