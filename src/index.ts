import express from 'express';
import mongoose from 'mongoose';

import { router } from './router';

mongoose
  .connect(
    'mongodb+srv://teamsoft:QHCI8d2rAPRncC6i@teamsoft.3wyjxzr.mongodb.net/test'
  )
  .then(() => {
    const app = express();
    const port = 3000;

    app.use(express.json());
    app.use(router);

    app.listen(port, () => {
      console.log('🚀 Server is running');
    });
    console.log('💻 Connected in MongoDB');
  })
  .catch((err) => {
    console.log('❌ This is error:', err);
  });
