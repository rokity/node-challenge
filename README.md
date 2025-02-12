# Node Challenge

Take home test for Node.js developers.

## The challenge

This challenge has been designed to measure your knowledge of Node.js, Express, Typescript and various technologies, like monorepos, databases and testing. For your exercise, you will be enhancing this API which serves as the backend for the Pleo app. Whenever a user of the app navigates to the expenses view, it calls this API to collect the list of expenses for that user.

Your objective is to write this new route to fetch the list of expenses for a given user. Right now that domain is empty, so you'll have to build everything from scratch- but you can look over at the user domain for inspiration. Please make sure that the endpoint scales adequately and supports paging, sorting and filtering. Additionally, we would also like you to write some tests for your route.

Finally, as a bonus objective, try to improve any aspect of this API. It could be to add more TS types, better security, tests, add features, graphql support, etc. 

## Instructions

Fork this repo with your solution. Ideally, we'd like to see your progression through commits, and don't forget to update the README.md to explain your thought process.

Please let us know how long the challenge takes you. We're not looking for how speedy or lengthy you are. It's just really to give us a clearer idea of what you've produced in the time you decided to take. Feel free to go as big or as small as you want.

## Install

Make sure that you have a modern version of `yarn` that supports workspaces (`>= 1.0`), then run:

```bash
yarn
```

You will also need to [install Postgres](https://www.postgresqltutorial.com/install-postgresql-macos/), create a `challenge` database and load the sql file `dump.sql`:

```bash
psql challenge < dump.sql
```

## Start

To enable logs, use the standard `NODE_DEBUG` flag with the value `DEBUG`

```bash
NODE_DEBUG=DEBUG yarn start
```

## Test

Make sure that you have a modern version of `yarn` that supports workspaces, then run:

```bash
yarn test
```

The command above will run the following test suites sequentially:

| Test suite | Run command | Description |
-------------|-------------|-------------|
| Unit | `yarn test:unit` | Simple unit tests. |
| Mid-level | `yarn test:mid-level` | Small integration tests that integration of small components together.  |
| Acceptances | `yarn test:acceptance` | Large integration tests, system tests, end-to-end tests. |


Happy hacking 😁!


# Solution Docs 

### Objective 

Create an API to handle basic operations on the expenses table. 
The operations needed to work with expenses table are Pagination, Sorting and Filtering.

### Methodologies

To implement and handle queries on Postgres I added ORM framework because it's more friendly and fast to handle operations on DB.
I used [TypeORM](https://github.com/typeorm/typeorm) by adding on db connection module (on utils) , the configuration and connection of TypeORM.
For handle the Expenses table I created and entity that map the structure of the table on the Expenses domain package.

### Bonus Extra

Implement the following features:
- Add a Oauth Authentication to the API. (Auth0)

### Setup Auth0 settings

- Create an Auth0 application with application type Web Regular Applications.
- Set the Allowed Callback to https://localhost:9001/callback on Auth0 Dashboard.
- Set the Allowed Logout  to https://localhost:9001 on Auth0 Dashboard.
- Configure .env file with the following values: 
    - SECRET= generate a random alphanumeric string of 100 characters
    - CLIENT_ID= take the client id from Auth0 Dashboard
    - ISSUER_BASE_URL= take the issuer_base_url from Auth0 Dashboard
