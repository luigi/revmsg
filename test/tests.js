'use strict';

const Code = require('code');
const Lab = require('lab');
const lab = exports.lab = Lab.script();
const server = require('../');

lab.experiment('GET endpoint', () => {
  lab.test('returns a 200 ok on an existing resource', (done) => {
    const options = {
      method: 'GET',
      url: '/api/v0/legislators/1',
    };

    server.inject(options, (response) => {
      Code.expect(response.statusCode).to.equal(200);
      done();
    });
  });

  lab.test('returns a 404 not found when resource does not exist', (done) => {
    const options = {
      method: 'GET',
      url: '/api/v0/legislators/99',
    };

    server.inject(options, (response) => {
      Code.expect(response.statusCode).to.equal(404);
      done();
    });
  });
});

lab.experiment('POST endpoint', () => {
  lab.test('returns a 201 on success', (done) => {
    const options = {
      method: 'POST',
      url: '/api/v0/legislators',
      payload: JSON.stringify({
        id: 2,
        name: 'Arya Stark',
        state: 'AK',
        district: 2,
        political_party: 'assassin',
        term_starts_on: '2016-06-01',
        term_ends_on: '2018-06-01',
      }),
    };

    server.inject(options, (response) => {
      Code.expect(response.statusCode).to.equal(201);
      done();
    });
  });

  lab.test('returns a 422 when validation fails', (done) => {
    const options = {
      method: 'POST',
      url: '/api/v0/legislators',
      payload: JSON.stringify({
        id: 2,
        name: 'Jon Snow',
        state: 'The Wall', // <----- Incorrect format
        district: 9,
        political_party: 'crow',
        term_starts_on: '2016-06-01',
        term_ends_on: '2018-06-01',
      }),
    };

    server.inject(options, (response) => {
      Code.expect(response.statusCode).to.equal(422);
      done();
    });
  });
});
