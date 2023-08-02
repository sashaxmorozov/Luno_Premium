import { getPairExchange } from './exchange.js'

export async function getPairLuno(){
    let luno
    let btcUsdLuno = 0
    let btcMyrLuno = 0
    try {
    let exR = await getPairExchange()
    const lunoob = await fetch(process.env.LUNO_API)
    if (lunoob.status === 200) {
    luno = await lunoob.json()
    btcMyrLuno = parseFloat(luno.last_trade)
    btcUsdLuno = btcMyrLuno / exR 
    return btcUsdLuno;}

    else {throw "Fetch error";}}
    catch (err){
        if (err === "Fetch error") {return "Failed to retrieve data from Luno"}
    }
    }