const express = require('express');
const router = express.Router();

const configs = require('../util/config')

const redis = require('../redis')

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});

router.get('/statistics', async (req, res) => {
  const counter = await redis.get('counter') || '0'
  response = {
    "added_todos": counter
  }
  res.send(response)
})

module.exports = router;
