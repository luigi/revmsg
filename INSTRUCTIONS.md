# Revolution Messaging JavaScript Exercise

Thank you for your interest in Revolution Messaging. We would like for you to complete the following exercise to aid the interview process. This exercise should only take you an hour or two to complete; if it takes a significant amount of time beyond two hours, the position might not be the right fit. Below are a set of instructions to follow when submitting. Please follow them closely to optimize your interview process.

Most importantly... Please have fun, and don't hesitate to email us about any questions you may have.

- [Gabe Hammersmith (CTO)](mailto: gabe@revolutionmessaging.com)
- [Josh Minnich (Senior Software Engineer)](mailto: josh@revolutionmessaging.com)

## Exercise

### Overview

You will be creating an API using Node.js and a common NPM module like Express, Hapi or Restify. It's important to think about how you will structure your endpoints for future versions and maintainability. The API you will be building only needs to have two endpoints. One of the endpoints will be for creating resources, the other will be for fetching them. The resource you will be working with are legislator records.

### Instructions

- Create an API that accepts and returns JSON with two endpoints. One `POST` and one `GET`.
- The `POST` endpoint must accept a JSON object and return a proper response and object.
- The `GET` endpoint must accept an ID for the resource and return a proper response and object.
- Tests are required.
- A README file explaining how to set up and run the API is required.
- Legislator objects should contain the attributes like the example documented below in the Resources section.
- You do not need to use a database. This can all be stored in memory.
- Post your exercise to your GitHub account as a public repo so we can access it.

### Resources

#### Legislator

```
{
	"id": 1,
	"name": "John Smith",
	"state": "CA",
	"district": 1,
	"political_party": "independent",
	"term_starts_on": "2016-02-01",
	"term_ends_on": "2018-02-01"
}
```
