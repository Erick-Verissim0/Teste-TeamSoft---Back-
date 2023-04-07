import { Request, Response } from 'express';

import { Address } from '../../models/Address';

export async function updateAddress(req: Request, res: Response) {
  const id = req.params.id;

  const { street, number, complement, district, city, state, zipCode } =
    req.body;

  const newAddress = {
    street,
    number,
    complement,
    district,
    city,
    state,
    zipCode,
  };
  try {
    const updateAddress = await Address.updateOne({ _id: id }, newAddress);

    if (updateAddress.matchedCount === 0) {
      res.status(422).json({ message: 'User not found!' });
      return;
    }

    res.status(200).send(newAddress);
  } catch (err: any) {
    res.status(500).json({ erro: err.message });
  }
}
