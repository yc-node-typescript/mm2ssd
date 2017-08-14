[![Build Status](https://travis-ci.org/yc-node-typescript/mm2ssd.svg?branch=master)](https://travis-ci.org/yc-node-typescript/mm2ssd.svg?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/yc-node-typescript/mm2ssd/badge.svg?branch=master)](https://coveralls.io/github/yc-node-typescript/mm2ssd?branch=master)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

# Overview

Transforming Mongoose model into Swagger schema definitions

# Installation

```bash
npm i mm2ssd
```
or
```
yarn add mm2ssd
```

# Usage

```ts
mm2ssd(model: mongoose.Model, xmlTagName: string);
// model: the mongoose model to be converted
// xmlTagName: xml root tag name
```

## Example

```ts
import * as mongoose from 'mongoose';
import { mm2ssd } from 'mm2ssd';

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
```

# Contributing

Looking forward to seeing your contributions!