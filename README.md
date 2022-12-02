# LAB - 401-D49 Lab-04

## Project: api-server

### Author: Lewis Benson

### Problem Domain

Phase 3 Requirements
Build a REST API using Express, by creating a proper series of endpoints that perform CRUD operations on a Postgres SQL Database, using the REST standard

### Links and Resources

- [ci/cd](https://github.com/tm-LBenson/api-server/actions) (GitHub Actions)
- [server-prod](https://d49-api-app.onrender.com)
- [db-prod](postgres://tm_lbenson:57Af2huVXU1cR50haeyet1HzfnKS161J@dpg-ce40715a499cum1nougg-a/api_app_z5xx)

### Setup

#### `.env` requirements (where applicable)

see `.env.sample`

#### How to initialize/run your application (where applicable)

- nodemon

#### Features / Routes

- Feature one: Deploy to Prod

- GET : `/` - specific route to hit
- `/food` : GET - read all items
- `/food` : POST - create one item
- `/food/:id` : GET - read one item
- `/food/:id` : PUT - update one item
- `/food/:id` : DELETE - delete one item

- `/clothes` : GET - read all items
- `/clothes` : POST - create one item
- `/clothes/:id` : GET - read one item
- `/clothes/:id` : PUT - update one item
- `/clothes/:id` : DELETE - delete one item

-Feature two: Add tests

- Add tests for server
- Add tests for each route
- -Feature three: Add Database
- Create Database on Render.

-Feature three: Add Data Model Class to handle requests
-add method for each type of CRUD method

#### Tests

- How do you run tests?
  - npm test
- Any tests of note?
  - handles root path
  - handles invalid paths
  - handles every CRUD function
- Describe any tests that you did not complete, skipped, etc

#### UML

![UML](./assets/uml.png)
Link to an image of the UML for your application and response to events
