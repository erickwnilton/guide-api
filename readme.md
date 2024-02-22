# Guide-backend

### Technology stack

- **Language** [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- **Back-end** [Node.js](https://nodejs.org/en)
- **Framework** [Express.js](https://expressjs.com/pt-br/)
- **TypeORM** [Sequelize.js](https://sequelize.org/)
- **Database** [Mysql](https://www.mysql.com/)
- **Test** [Jest](https://jestjs.io/pt-BR/)

### Running locally

1. Clone this repo:

```
$ git clone https://github.com/erickwnilton/guide-api.git
```

2. Install all dependencies:

```
npm install
```

3. Run locally:

```
npm start
```

4. Run global test:

```
npm run test
```

5. Run individual test:

### File structure

```
-
|__tests__
|- src
|-- controllers
|-- database
|-- models
|-- routes
` app.js
` index.js
```

## Important

To carry out the tests it is necessary to pass the data and IDs to be changed. Do not perform tests without permission. They act directly on the database.