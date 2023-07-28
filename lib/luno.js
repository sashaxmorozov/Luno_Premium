import { getPairExchange } from './exchange.js'

export async function getPairLuno(){
    let luno
    let btcUsdLuno = 0
    let btcMyrLuno = 0
    let exR = await getPairExchange()
    const lunoob = await fetch(process.env.LUNO_API)
    luno = await lunoob.json()
    btcMyrLuno = parseFloat(luno.last_trade)
    btcUsdLuno = btcMyrLuno / exR 
    return btcUsdLuno;
    }