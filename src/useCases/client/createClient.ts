import { Request, Response } from 'express';

import { Client } from '../../models/Client';

export async function createClient(req: Request, res: Response) {
  try {
    const { cnpj, companyName, contactName, phone, addresses } = req.body;

    const client = await Client.create({
      cnpj,
      companyName,
      contactName,
      phone,
      addresses,
    });

    res.status(201).send(client);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}
