import { getPairLuno } from '../lib/luno.js'

const MOCK_ERATE = 4.5
jest.mock ('../lib/exchange.js', () => ({
    getPairExchange: jest.fn(() => MOCK_ERATE)
}));



jest.mock ('../lib/exchange.js', () => ({
        getPairExchange: jest.fn(() => MOCK_ERATE)
    }));
    

beforeEach(() => {
    jest.resetModules(); // reset module mocks before each test to not affect other tests in this file
  });

// we're modifying the fetch method to return these values


test("Returns Message for Failed Luno Response", async () => {
    const MOCK_STATUS_CODE = 500
    global.fetch = jest.fn(() => Promise.resolve({
        status: MOCK_STATUS_CODE,
        json: () => { }
      }));
  expect(await getPairLuno()).toBe("Failed to retrieve data from Luno");
});



test("Returns Message for Successfull Response", async () => {


    const MOCK_LASTTRADE = 133000
    const MOCK_PRICE = MOCK_LASTTRADE / MOCK_ERATE

    global.fetch = jest.fn(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve({ last_trade: MOCK_LASTTRADE })
      }));
      expect(await getPairLuno()).toBe(MOCK_PRICE);



    });
