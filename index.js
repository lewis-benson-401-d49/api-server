'use strict';

const { SQLDb } = require('./src/models');


const server = require('./src/server');

SQLDb.sync()
  .then(() => {
    console.log('Connected');
    server.start();
  }).catch(err => console.error(err.message));


