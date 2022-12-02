'use strict';
const { app } = require('../src/server');
const supertest = require('supertest');
const request = supertest(app);
const { SQLDb } = require('../src/models');

beforeAll(async () => {
  await SQLDb.sync();
});

afterAll(async () => {
  await SQLDb.drop();
});


describe('Rest API Server', () => {
  test('Creates a food item', async () => {
    let food1 = await (request.post('/food')).send({
      name: 'tester',
      amount: 42,
    });
    let food2 = await (request.post('/food')).send({
      name: 'tester2',
      amount: 4242,
    });
    expect(food1.status).toEqual(201);
    expect(food1.body.name).toEqual('tester');
    expect(food1.body.amount).toEqual(42);
    expect(food2.status).toEqual(201);
    expect(food2.body.name).toEqual('tester2');
    expect(food2.body.amount).toEqual(4242);
  });

  test('Updates a food item', async () => {
    let response = await (request.put('/food/1')).send({
      name: 'tester3',
      amount: 42,
    });
    expect(response.status).toEqual(202);
  });

  test('reads all food items', async () => {
    let response = await (request.get('/food'));
    console.log(response);
    expect(response.body.length).toEqual(2);
    expect(response.status).toEqual(200);
  });

  test('Deletes a food item', async () => {
    let response = await (request.delete('/food/1')).send({
      name: 'tester',
      amount: 42,
    });
    expect(response.status).toEqual(204);
    expect(response.text).toEqual('');

  });

  test('Read a food item', async () => {
    let response = await (request.get('/food/1')).send({
      name: 'tester',
      amount: 42,
    });
    expect(response.status).toEqual(200);
  });


  test('Creates a clothes item', async () => {
    let clothes1 = await (request.post('/clothes')).send({
      name: 'tester',
      amount: 42,
    });
    let clothes2 = await (request.post('/clothes')).send({
      name: 'tester2',
      amount: 4242,
    });
    expect(clothes1.status).toEqual(201);
    expect(clothes1.body.name).toEqual('tester');
    expect(clothes1.body.amount).toEqual(42);
    expect(clothes2.status).toEqual(201);
    expect(clothes2.body.name).toEqual('tester2');
    expect(clothes2.body.amount).toEqual(4242);

  });

  test('reads all clothes items', async () => {
    let response = await (request.get('/clothes'));
    console.log(response);
    expect(response.body.length).toEqual(2);
    expect(response.status).toEqual(200);
  });

  test('Updates a clothes item', async () => {
    let response = await (request.put('/clothes/1')).send({
      name: 'tester',
      amount: 42,
    });
    expect(response.status).toEqual(202);


  });

  test('Deletes a clothes item', async () => {
    let response = await (request.delete('/clothes/1')).send({
      name: 'tester',
      amount: 42,
    });
    expect(response.status).toEqual(204);
    expect(response.text).toEqual('');

  });

  test('Read a clothes item', async () => {
    let response = await (request.get('/clothes/1')).send({
      name: 'tester',
      amount: 42,
    });
    expect(response.status).toEqual(200);
  });

  test('Sends a 404 error on a bad path', async () => {
    let response = await (request.get('/bad')).send();
    expect(response.status).toEqual(404);
  });

  test('Sends a 404 error on a bad method', async () => {
    let response = await (request.delete('/food')).send();
    expect(response.status).toEqual(404);
  });

});


// Assert the following
// 404 on a bad route
// 404 on a bad method
// The correct status codes and returned data for each REST route
// Create a record using POST
// Read a list of records using GET
// Read a record using GET
// Update a record using PUT
// Destroy a record using DELETE