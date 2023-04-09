import { Request, Response } from 'express';

import { Address } from '../../models/Address';

export async function createAddress(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { street, number, complement, district, city, state, zipCode } =
      req.body;

    const address = await Address.create({
      street,
      number,
      complement,
      district,
      city,
      state,
      zipCode,
    });

    res.status(201).send(address);
  } catch (err: any) {
    res.status(500).json({ erro: err.message });
  }
}
