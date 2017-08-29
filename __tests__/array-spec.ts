import * as mongoose from 'mongoose';
import { mm2ssd } from '../src/';

test('Should generate schema with array fields', () => {
  const model = mongoose.model(
    'array',
    new mongoose.Schema({
      array: [[String]],
      boolean: [Boolean],
      buffer: [Buffer],
      date: [Date],
      decimal: [mongoose.SchemaTypes.Decimal128],

      // case SchemaTypes.DocumentArray:
      //   obj.items = this.processDocumentArray(type);
      //   break;
      mixed: [{}],
      number: [Number],
      objectId: [mongoose.SchemaTypes.ObjectId],
      string: [String],
    })
  );
  const schema = mm2ssd(model);
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
      array: {
        type: 'array',
        items: {
          type: 'array',
          items: {
            type: 'string',
            required: false,
          },
          required: false,
        },
        required: false,
      },
      boolean: {
        type: 'array',
        items: {
          type: 'boolean',
          required: false,
        },
        required: false,
      },
      buffer: {
        type: 'array',
        items: {
          type: 'string',
          required: false,
        },
        required: false,
      },
      date: {
        type: 'array',
        items: {
          type: 'string',
          format: 'date-time',
          required: false,
        },
        required: false,
      },
      decimal: {
        type: 'array',
        items: {
          type: 'number',
          format: 'double',
          required: false,
        },
        required: false,
      },
      mixed: {
        type: 'array',
        items: {
          type: 'object',
          properties: {},
          required: false,
        },
        required: false,
      },
      number: {
        type: 'array',
        items: {
          type: 'integer',
          format: 'int64',
          required: false,
        },
        required: false,
      },
      objectId: {
        type: 'array',
        items: {
          type: 'string',
          required: false,
        },
        required: false,
      },
      string: {
        type: 'array',
        items: {
          type: 'string',
          required: false,
        },
        required: false,
      },
    },
    xml: {
      name: 'array',
    },
    required: [],
  });
});
