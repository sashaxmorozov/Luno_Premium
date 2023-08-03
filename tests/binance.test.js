beforeEach(() => {
  jest.resetModules(); // reset module mocks before each test to not affect other tests in this file
});

test("Returns price if Binance request succeeds", async () => {
  const getPairBinance = require('../lib/binance.js').getPairBinance // your function name could be different

  // mocking the entire node-binance-api module
  jest.mock('node-binance-api', () => {
    return class Binance {
      // we use only the prices method for this particular test, so we'll mock just this method
      prices() {
        return new Promise(res => {
          res({
            BTCBUSD: 29556
          })
        })
      }
    }
  })

  expect(await getPairBinance()).toBe(29556);
});