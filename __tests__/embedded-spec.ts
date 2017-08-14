import * as mongoose from 'mongoose';
import { mm2ssd } from '../src/';

test('Should generate schema with embedded fields', () => {
  const user = new mongoose.Schema({
    name: String,
    age: Number
  });
  const model = mongoose.model('embedded', new mongoose.Schema({
    contacts: [user],
    info: user
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
      contacts: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            _id: {
              type: 'string',
              required: false
            },
            name: {
              type: 'string',
              required: false
            },
            age: {
              type: 'integer',
              format: 'int64',
              required: false
            },
          },
          xml: {
            name: 'item'
          },
          required: []
        },
        required: false
      },
      info: {
        type: 'object',
        properties: {
          _id: {
            type: 'string',
            required: false
          },
          name: {
            type: 'string',
            required: false
          },
          age: {
            type: 'integer',
            format: 'int64',
            required: false
          },
        },
        xml: {
          name: 'info'
        },
        required: []
      }
    },
    xml: {
      name: 'xml'
    },
    required: []
  });
});
