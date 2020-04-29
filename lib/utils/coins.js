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

exports.getCoinsFromCoincap = getCoinsFromCoincap;
