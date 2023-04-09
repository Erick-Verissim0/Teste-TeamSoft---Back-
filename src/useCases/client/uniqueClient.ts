import { Request, Response } from 'express';

import { Client } from '../../models/Client';

export async function uniqueClient(req: Request, res: Response) {
  const id = req.params.id;

  try {
    const client = await Client.findOne({ _id: id });

    if (!client) {
      res.status(422).json({ message: 'Client not found!' });
    }

    res.status(200).json(client);
  } catch (err: any) {
    res.status(500).json({ erro: err.message });
  }
}
