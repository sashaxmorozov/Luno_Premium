import { getUserInput } from './input.js';
import Binance from 'node-binance-api';
//fetch ticker data from Binance
export async function getPairBinance(userInputBinance) {
    let resBinance = 0
    const binance = new Binance()
    try {
        let ticker = await binance.prices();
        if (isNaN(ticker[`${userInputBinance}BUSD`]) === false) {
            resBinance = parseFloat(ticker[`${userInputBinance}BUSD`])
            return resBinance
        }
        else
            throw "Fetch error";
    }
    catch (err) {
        if (err == "Fetch error")
            return "Failed to retrieve data from Binance"
        throw err;
    }
}