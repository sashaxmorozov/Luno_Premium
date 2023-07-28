import Binance from 'node-binance-api';
import {getPairExchange} from './exchange.js';

export async function getPairBinance(){
    let resBinance = 0
    const binance = new Binance()
    let ticker = await binance.prices();
    resBinance = parseFloat(ticker.BTCBUSD)
    return resBinance }
