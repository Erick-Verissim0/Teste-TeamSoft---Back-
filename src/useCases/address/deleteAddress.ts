import { Request, Response } from 'express';

import { Address } from '../../models/Address';

export async function deleteAddress(req: Request, res: Response) {
  const id = req.params.id;

  const address = await Address.findOne({ _id: id });

  if (!address) {
    res.status(422).json({ message: 'Address not found!' });
    return;
  }

  try {
    await Address.deleteOne({ _id: id });

    res.status(200).json({ message: 'Address removed successfully!' });
  } catch (err) {
    res.status(500).json({ erro: err });
  }
}
