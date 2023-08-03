import { } from 'dotenv/config'

let priceLuno = 0
let priceBinance = 0
let exchangeR = 0
//Imprort the functions from lib folder
import { getPairBinance } from './lib/binance.js'
import { getPairLuno } from './lib/luno.js'
import { getPairExchange } from './lib/exchange.js'
//Define difference variables, calculate them upon receiving data from API requests and finally return values on screen
export default async function output() {
    let priceDiff = 0
    let percDiff = 0
    priceBinance = await getPairBinance()
    priceLuno = await getPairLuno()
    exchangeR = await getPairExchange()
    priceDiff = priceLuno - priceBinance
    percDiff = ((priceDiff / priceBinance) * 100)
    console.log("BTC/USD on Luno: " + priceLuno.toFixed(2))
    console.log("BTC/USD on Binance: " + priceBinance.toFixed(2))
    console.log("Exchange rate USD/MYR: " + exchangeR.toFixed(2))
    console.log("Price difference: " + priceDiff.toFixed(2))
    console.log("Luno Premium: " + percDiff.toFixed(2) + '%')
}

output()