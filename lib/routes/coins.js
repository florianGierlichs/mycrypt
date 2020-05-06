const express = require('express');
const router = express.Router();
const { getCoinsFromCoincap, getCoinHistory } = require('../utils/coins');

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

router.get('/history/:id', async (request, response) => {
  try {
    const coinHistory = await getCoinHistory(request.params.id);
    response.json(coinHistory);
  } catch (error) {
    console.error(error);
    response.status(500).send(error);
  }
});

module.exports = router;
