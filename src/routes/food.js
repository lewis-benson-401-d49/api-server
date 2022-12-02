'use strict';

const express = require('express');
const { FoodModel } = require('../models');
const { foodInterface } = require('../models');
const router = express.Router();

router.get('/food', async (req, res, next) => {
  try {
    const food = await foodInterface.read();
    res.status(200).send(food);
  } catch (err) {
    next(err.message);
  }
});

router.get('/food/:id', async (req, res, next) => {
  try {

    const foodItem = await foodInterface.read({
      where: { id: +req.params.id },
    });
    res.status(200).send(foodItem);
  } catch (err) {
    next(err.message);
  }
});

router.post('/food', async (req, res, next) => {
  try {
    const newFood = await foodInterface.create(req.body);
    res.status(201).send(newFood);
  } catch (err) {
    next(err.message);
  }
});

router.put('/food/:id', async (req, res, next) => {
  try {
    const foodItem = await foodInterface.update(
      req.body,
      {
        where: { id: +req.params.id },
      });
    res.status(202).send(foodItem);
  } catch (err) {
    next(err.message);
  }
});

router.delete('/food/:id', async (req, res, next) => {
  try {
    await foodInterface.delete(
      {
        where: { id: +req.params.id },
      });
    res.status(204).send('successfully deleted');
  } catch (err) {
    next(err.message);
  }
});

module.exports = router;
