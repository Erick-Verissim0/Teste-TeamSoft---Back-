import { Request, Response } from 'express';

import { Address } from '../../models/Address';

export async function uniqueAddress(req: Request, res: Response) {
  const id = req.params.id;

  try {
    const address = await Address.findOne({ _id: id });

    if (!address) {
      res.status(422).json({ message: 'Address not found!' });
      return;
    }

    res.status(200).json(address);
  } catch (err: any) {
    res.status(500).json({ erro: err.message });
  }
}
