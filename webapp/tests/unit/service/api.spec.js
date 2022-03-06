import API from '@/services/api.js';

describe('API service', () => {

  test('return number if call sucessful', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve(
        { status: 200, text: () => "10000" },
      )
    );
    expect(await API.getRandomNumberFromAPI()).toStrictEqual({ success: true, data: 1 });
  });

  test('return error if call unsucessfull', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve(
        { status: 400 },
      )
    );
    expect(await API.getRandomNumberFromAPI()).toStrictEqual({ success: false, error: "error while calling the API" });
  });
});