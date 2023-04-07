import { Request, Response } from 'express';

import { Client } from '../../models/Client';

export async function updateClient(req: Request, res: Response) {
  const id = req.params.id;

  const { cnpj, companyName, contactName, phone } = req.body;

  const newClient = {
    cnpj,
    companyName,
    contactName,
    phone,
  };

  try {
    const updateClient = await Client.updateOne({ _id: id }, newClient);

    if (updateClient.matchedCount === 0) {
      res.status(422).json({ message: 'User not found!' });
      return;
    }

    res.status(200).send(newClient);
  } catch (err) {
    console.log(err);
  }
}
