'use strict';

const Hapi = require('hapi');
const Joi = require('joi');

const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: 2727,
});

const schema = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().required(),
  state: Joi.string().length(2).required(),
  district: Joi.number().required(),
  political_party: Joi.string().required(),
  term_starts_on: Joi.date().format('YYYY-MM-DD').required(),
  term_ends_on: Joi.date().format('YYYY-MM-DD').required(),
});

const db = [{
  id: 1,
  name: 'John Smith',
  state: 'CA',
  district: 1,
  political_party: 'independent',
  term_starts_on: '2016-02-01',
  term_ends_on: '2018-02-01',
}];

function getRecord(id) {
  let foundRecord = { };
  db.forEach((record) => {
    if (record.id === id) {
      foundRecord = record;
    }
  });
  return foundRecord;
}

function addRecord(record) {
  let status = {};
  Joi.validate(record, schema, (err) => {
    if (err) {
      status = { message: err, code: 422 };
    } else {
      db.push(record);
      status = { message: 'Record successfully added!', code: 201 };
    }
  });
  return status;
}

server.route({
  method: 'GET',
  path: '/api/v0/legislators/{id}',
  handler(request, reply) {
    const record = getRecord(parseInt(request.params.id, 10));
    const recordEmpty = Object.keys(record).length === 0;
    return reply(record).code(recordEmpty ? 404 : 200);
  },
});

server.route({
  method: 'POST',
  path: '/api/v0/legislators',
  handler(request, reply) {
    const status = addRecord(request.payload);
    return reply(status).code(status.code);
  },
});

server.start((err) => {
  if (err) {
    throw err;
  }
  console.log('Feeling the Bern on:', server.info.uri);
});

module.exports = server;
