beforeEach(() => {
  jest.resetModules(); // reset module mocks before each test to not affect other tests in this file
});

import { getPairExchange } from '../lib/exchange.js'

test("Returns Message for Failed Exchange Response", async () => {
  const MOCK_STATUS_CODE = 500
  global.fetch = jest.fn(() => Promise.resolve({
    status: MOCK_STATUS_CODE,
    json: () => { }
  }));
  expect(await getPairExchange()).toBe("Failed to retrieve exchange rate data");
});



test("Returns Message for Successfull Response", async () => {
  const MOCK_ERATE = 4.5
  global.fetch = jest.fn(() => Promise.resolve({
    status: 200,
    json: () => Promise.resolve({ result: MOCK_ERATE })
  }));
  expect(await getPairExchange()).toBe(MOCK_ERATE);

});

