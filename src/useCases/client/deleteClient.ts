import { Request, Response } from 'express';

import { Client } from '../../models/Client';

export async function deleteClient(req: Request, res: Response) {
  const id = req.params.id;

  const client = await Client.findOne({ _id: id });

  if (!client) {
    res.status(422).json({ message: 'Client not found!' });
    return;
  }

  try {
    await Client.deleteOne({ _id: id });

    res.status(200).json({ message: 'Client removed successfully!' });
  } catch (error) {
    res.status(500).json({ erro: error });
  }
}