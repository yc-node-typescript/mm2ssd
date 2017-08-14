import * as mongoose from 'mongoose';
import { mm2ssd } from '../src/';

test('Should generate schema with array fields', () => {
  const model = mongoose.model(
    'array',
    new mongoose.Schema({
      subjects: [
        {
          type: String,
        },
      ],
      events: [String],
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
      subjects: {
        type: 'array',
        items: {
          type: 'string',
          required: false,
        },
        required: false,
      },
      events: {
        type: 'array',
        items: {
          type: 'string',
          required: false,
        },
        required: false,
      },
    },
    xml: {
      name: 'xml',
    },
    required: [],
  });
});
