import * as mongoose from 'mongoose';
import { mm2ssd } from '../src/';

test('Should generate schema with mixed field', () => {
  const model = mongoose.model('mixed', new mongoose.Schema({
    mixed: {}
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
      mixed: {
        type: 'object',
        properties: {},
        required: false
      },
    },
    xml: {
      name: 'xml'
    },
    required: []
  });
});
