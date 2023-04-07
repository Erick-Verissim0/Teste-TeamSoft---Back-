import { model, Schema } from 'mongoose';

export const Client = model(
  'Client',
  new Schema({
    cnpj: {
      type: String,
      required: true,
      minlength: 14,
    },
    companyName: {
      type: String,
      required: true,
    },
    contactName: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      minlength: 9,
    },
    addresses: {
      required: true,
      type: [
        {
          address: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'Address',
          },
        },
      ],
    },
  })
);
