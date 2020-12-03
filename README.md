## Description

REST API to return user information based on the endpoint. The API is created by using NestJS.
<br />
The API fetches data from PostgreSQL by using [TYPEORM](https://typeorm.io/#/)

## Installation

Using npm:

```bash
$ npm install
```

Using Yarn:

```bash
$ yarn
```

## Important

1-) The fields in the [typeormconfig file](./config/typeormconfig.ts) should be changed with the installed PostgreSQL credentials

2-) To create dummy data, please use the **createdummydata**

## Running the app

Using npm:

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

#Test
-----

# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

Using yarn:

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod

#Test
-----

# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```

## Running API Endpoints

| Endpoint                | Purpose                                        | Type |
| ----------------------- | ---------------------------------------------- | ---- |
| /id/#id                 | The route that fetches the User by Id          | Get  |
| /state/#state           | The route that fetches Users by state          | Get  |
| /experience/#experience | The route that fetches Users by pet experience | Get  |
| /firstname/#firstname   | The route that fetches Users by first name     | Get  |
| /lastname/#lastname     | The route that fetches Users by last name      | Get  |
| /email/#email           | The route that fetches Users by email address  | Get  |
| /createdummydata        | The route that creates dummy data for users    | Post |
