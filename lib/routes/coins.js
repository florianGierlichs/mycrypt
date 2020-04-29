const express = require('express');
const router = express.Router();
const { getCoinsFromCoincap } = require('../utils/coins');

router.get('/', async (request, response) => {
  try {
    // const { q } = request.query;

    // ToDo filter by query
    const coins = await getCoinsFromCoincap();

    response.json(coins);
  } catch (error) {
    console.error(error);
    response.status(500).send(error);
  }
});

module.exports = router;
