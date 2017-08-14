import * as mongoose from 'mongoose';
import { mm2ssd } from '../src/';

test('Should generate simple schema', () => {
  const model = mongoose.model('simple', new mongoose.Schema({
    name: {
      type: String,
      required: true,
      enum: ['Tom', 'Jerry']
    },
    age: Number,
    date: Date,
    balance: mongoose.SchemaTypes.Decimal128
  }));
  const schema = mm2ssd(model, 'xml');
  expect(schema).toEqual({
    type: 'object',
    properties: {
      _id: {
        type: 'string',
        required: false
      },
      __v: {
        type: 'integer',
        format: 'int64',
        required: false
      },
      name: {
        type: 'string',
        required: true,
        enum: ['Tom', 'Jerry']
      },
      age: {
        type: 'integer',
        format: 'int64',
        required: false
      },
      date: {
        type: 'string',
        format: 'date-time',
        required: false
      },
      balance: {
        type: 'number',
        format: 'double',
        required: false
      }
    },
    xml: {
      name: 'xml'
    },
    required: ['name']
  });
});
