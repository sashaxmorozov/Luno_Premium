const Binance = require('node-binance-api');
require('dotenv').config()

let priceLuno = 0
let priceBinance = 0
let exchangeR = 0


async function getPairLuno(){
let btcMyrLuno = 0
const lunoob = await fetch(process.env.LUNO_API)
luno = await lunoob.json()
btcMyrLuno = parseFloat(luno.last_trade)
return btcMyrLuno;
}
getPairLuno();


async function getBtcUsdBinance(){
let resBinance = 0
const binance = new Binance()
let ticker = await binance.prices();
resBinance = parseFloat((`${ticker.BTCBUSD}`))
return resBinance

}
getBtcUsdBinance();


async function getUsdMyr(){
    var myHeaders = new Headers();
    let usdMyr = 0
myHeaders.append("apikey", process.env.EXCHANGE_API);
var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};
await fetch("https://api.apilayer.com/fixer/convert?to=MYR&from=USD&amount=1", requestOptions)
  .then(response => response.json())
  .then(result => usdMyr = parseFloat(result.result))
  .catch(error => console.log('error', error))
  //console.log(usdMyr)
  return usdMyr;
  
  }
  getUsdMyr()

async function getPairBinance(){
  let btcMyrBinance = 0
  let exr = 0
  let btcUsd = 0
exr = await getUsdMyr()
btcUsd = await getBtcUsdBinance()
btcMyrBinance = (exr * btcUsd)
return btcMyrBinance
}

getPairBinance()

async function output(){
let priceDiff = 0
let percDiff = 0
priceBinance = await getPairBinance()
priceLuno = await getPairLuno()
exchangeR = await getUsdMyr()
priceDiff = priceLuno - priceBinance
percDiff = ((priceDiff / priceBinance) * 100).toFixed(2)
console.log("BTC/MYR on Luno: " + priceLuno)
console.log("BTC/MYR on Binance: " + priceBinance)
console.log("Exchange rate USD/MYR: " + exchangeR)
console.log("Price difference: " + priceDiff)
console.log("Luno Premium: " + percDiff + '%')
}

output()