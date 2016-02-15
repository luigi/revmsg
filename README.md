
## Implementation ##

This was indeed a fun exercise! I decided to use `hapi` for the server and its friends `Joi` for schema validation and `Lab` for tests. The code uses ES2015 and follows the [Airbnb style guide](https://github.com/airbnb/javascript/).

## API Design ##

The two endpoints follow HTTP status code best practices. The GET endpoint returns 200 if the resource was found and 404 if not found. The POST endpoint returns 201 (Created) on success and 422 (Unprocessable Entity) on a schema validation error.

API versioning is done through the URL: `/api/v0/...`. Content negotiation through the `Accept:` header can be considered the most "RESTful", but in practice the most popular APIs incorporate the versioning into the URL.


## Trying out the API ##

Install dependencies:

```
$ npm install
```

Start the server:

```
$ npm start
```

The server pre-loads a single resource at `id: 1`:

[http://localhost:2727/api/v0/legislators/1](http://localhost:2727/api/v0/legislators/1)

To exercise the POST endpoint:

```
$ curl -X POST -H 'Content-Type: application/json' -d '{"id": 2, "name": "Arya Stark", "state": "AK", "district": 2, "political_party": "assassin", "term_starts_on": "2016-06-01", "term_ends_on": "2018-06-01"}' http://localhost:2727/api/v0/legislators
```

The resource will then be available at:

[http://localhost:2727/api/v0/legislators/2](http://localhost:2727/api/v0/legislators/2)

To see a validation error when POST'ing an incorrect format for `state`:

```
$ curl -X POST -H 'Content-Type: application/json' -d '{"id": 3, "name": "Jon Snow", "state": "The Wall", "district": 5, "political_party": "crow", "term_starts_on": "2016-06-01", "term_ends_on": "2018-06-01"}' http://localhost:2727/api/v0/legislators
```

## Running the tests ##

To keep things simple, I only tested for the correct HTTP codes. Ensure the server is stopped, then run:

```
$ npm test
```

I don't think tests for schema validation are necessary when using a popular validation library like `Joi`.
