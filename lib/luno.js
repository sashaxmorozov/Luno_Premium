import { getUserInput } from './input.js'
import { getPairExchange } from './exchange.js'
//imported exchange rate function from exchange module
export async function getPairLuno(userInput) {
    let luno
    let btcUsdLuno = 0
    let btcMyrLuno = 0
    try {
        let exR = await getPairExchange()
        const lunoob = await fetch("https://api.luno.com/api/1/ticker?pair="+userInput+'MYR')
        if (lunoob.status === 200) {
            luno = await lunoob.json()
            btcMyrLuno = parseFloat(luno.last_trade)
            btcUsdLuno = btcMyrLuno / exR
            return btcUsdLuno;
        }

        else { throw "Fetch error"; }
    }
    catch (err) {
        if (err === "Fetch error") { return "Failed to retrieve data from Luno" }
    }
}