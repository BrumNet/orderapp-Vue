'use strict'
require('dotenv').config();
const fastify = require('./app')

fastify.listen(3000, () =>
  console.log(`listening on port 3000!`),
);