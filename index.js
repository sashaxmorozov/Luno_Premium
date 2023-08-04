import { } from 'dotenv/config'

let priceLuno = 0
let priceBinance = 0
let exchangeR = 0
let userData = 0
//Imprort the functions from lib folder
import { getUserInput }  from './lib/input.js';
import { getPairBinance } from './lib/binance.js'
import { getPairLuno } from './lib/luno.js'
import { getPairExchange } from './lib/exchange.js'
//Define difference variables, calculate them upon receiving data from API requests and finally return values on screen
export async function output() {
    userData = await getUserInput();
    let priceDiff = 0
    let percDiff = 0
    priceBinance = await getPairBinance(userData.binanceTicker)
    priceLuno = await getPairLuno(userData.lunoTicker)
    exchangeR = await getPairExchange()
    priceDiff = priceLuno - priceBinance
    percDiff = ((priceDiff / priceBinance) * 100)
    console.log(userData.binanceTicker+"/USD on Luno: " + priceLuno.toFixed(2))
    console.log(userData.lunoTicker+"/USD on Binance: " + priceBinance.toFixed(2))
    console.log("Exchange rate USD/MYR: " + exchangeR.toFixed(2))
    console.log("Price difference: " + priceDiff.toFixed(2))
    console.log("Luno Premium: " + percDiff.toFixed(2) + '%')
}

output()