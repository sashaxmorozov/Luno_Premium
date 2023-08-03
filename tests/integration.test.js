const { getPairBinance } = require('../lib/binance');

beforeEach(() => {
    jest.resetModules(); // reset module mocks before each test to not affect other tests in this file
  });

  test("Returns an error if integration isnt correct", async () => {
    
const output = require('../index.js').default;
const MOCK_BINANCE = 29488  
jest.mock ('../lib/binance.js', () => {
const MOCK_BINANCE = 29488;  
return { getPairBinance(){
return new Promise (res => res(MOCK_BINANCE))
}}});
const MOCK_LUNO = 29563;
jest.mock ('../lib/luno.js', () => {
 return { getPairLuno (){  
return new Promise (res => res(MOCK_LUNO))
}}}); 
const MOCK_ERATE = 4.5
jest.mock ('../lib/exchange.js', () => {
    return { getPairExchange(){
return new Promise (res => res(MOCK_ERATE))
}}});

console.log = jest.fn(() => undefined )
await output();
const priceDiff = MOCK_LUNO - MOCK_BINANCE
const percDiff = ((priceDiff/MOCK_BINANCE)*100)
expect(console.log).toHaveBeenCalledWith("BTC/USD on Luno: " + MOCK_LUNO.toFixed(2));
expect(console.log).toHaveBeenCalledWith("BTC/USD on Binance: " + MOCK_BINANCE.toFixed(2));
expect(console.log).toHaveBeenCalledWith("Exchange rate USD/MYR: " + MOCK_ERATE.toFixed(2));
expect(console.log).toHaveBeenCalledWith("Price difference: " + priceDiff.toFixed(2));
expect(console.log).toHaveBeenCalledWith("Luno Premium: " + percDiff.toFixed(2) + '%');




  });
