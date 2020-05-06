const fetch = require('node-fetch');

async function getCoinsFromCoincap() {
  const coincapResponse = await fetch('https://api.coincap.io/v2/assets');
  const coincapResult = await coincapResponse.json();
  const coins = coincapResult.data.map((coin) => ({
    id: coin.id,
    symbol: coin.symbol,
    name: coin.name,
    priceUsd: Number(coin.priceUsd),
  }));
  return coins;
}

async function getCoinHistory(coinId) {
  const unixBeginning2020 = Math.round(new Date('2020.01.01').getTime());
  const unixToday = Math.round(new Date().getTime());

  const coincapResponse = await fetch(
    `https://api.coincap.io/v2/assets/${coinId}/history?interval=d1&start=${unixBeginning2020}&end=${unixToday}`
  );
  const coincapResult = await coincapResponse.json();
  return coincapResult;
}

exports.getCoinsFromCoincap = getCoinsFromCoincap;
exports.getCoinHistory = getCoinHistory;
