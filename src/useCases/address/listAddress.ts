import { Request, Response } from 'express';

import { Address } from '../../models/Address';

export async function listAddress(req: Request, res: Response) {
  try {
    const address = await Address.find();

    res.json(address);
  } catch (err: any) {
    res.status(500).json({ erro: err.message });
  }
}
