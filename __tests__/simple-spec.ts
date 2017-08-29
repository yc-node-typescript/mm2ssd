import * as mongoose from 'mongoose';
import { mm2ssd } from '../src/';

test('Should generate simple schema', () => {
  const model = mongoose.model(
    'simple',
    new mongoose.Schema({
      name: {
        type: String,
        required: true,
        enum: ['Tom', 'Jerry'],
      },
      age: Number,
      grade: {
        type: Number,
        enum: [1, 2, 3],
      },
      date: Date,
      balance: mongoose.SchemaTypes.Decimal128,
      rate: {
        type: mongoose.SchemaTypes.Decimal128,
        enum: [0.1, 0.2],
      },
      buffer: Buffer,
      member: Boolean,
    })
  );
  const schema = mm2ssd(model, 'xml');
  expect(schema).toEqual({
    type: 'object',
    properties: {
      _id: {
        type: 'string',
        required: false,
      },
      __v: {
        type: 'integer',
        format: 'int64',
        required: false,
      },
      name: {
        type: 'string',
        required: true,
        enum: ['Tom', 'Jerry'],
      },
      age: {
        type: 'integer',
        format: 'int64',
        required: false,
      },
      grade: {
        type: 'integer',
        format: 'int64',
        required: false,
        enum: [1, 2, 3],
      },
      date: {
        type: 'string',
        format: 'date-time',
        required: false,
      },
      balance: {
        type: 'number',
        format: 'double',
        required: false,
      },
      rate: {
        type: 'number',
        format: 'double',
        required: false,
        enum: [0.1, 0.2],
      },
      buffer: {
        type: 'string',
        required: false,
      },
      member: {
        type: 'boolean',
        required: false,
      },
    },
    xml: {
      name: 'xml',
    },
    required: ['name'],
  });
});
