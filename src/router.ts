import { Router } from 'express';

import { createClient } from './useCases/client/createClient';
import { listClient } from './useCases/client/listClient';
import { createAddress } from './useCases/address/createAddress';
import { listAddress } from './useCases/address/listAddress';
import { deleteClient } from './useCases/client/deleteClient';
import { updateClient } from './useCases/client/updateClient';
import { deleteAddress } from './useCases/address/deleteAddress';
import { updateAddress } from './useCases/address/updateAddress';

export const router = Router();

router.get('/client', listClient);

router.post('/client', createClient);

router.patch('/client/:id', updateClient);

router.delete('/client/:id', deleteClient);

router.get('/address', listAddress);

router.post('/address', createAddress);

router.patch('/address/:id', updateAddress);

router.delete('/address/:id', deleteAddress);
