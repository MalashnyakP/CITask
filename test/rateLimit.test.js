const axios = require('axios');

const baseURL = 'http://localhost:81';

async function makeRequests(url, count) {
  try {
    const requests = Array.from({ length: count }).map(() => axios.get(url));
    const responses = await Promise.all(requests);
    return responses;
  } catch (error) {
    return error.response;
  }
}

describe('Rate limit tests', () => {
  describe('/task/1l', () => {
    it('should allow 10 requests within a minute without exceeding rate limit', async () => {
      try {
        await makeRequests(`${baseURL}/task/1l`, 10);
        await axios.get(`${baseURL}/task/1l`);
      } catch (error) {
        expect(error.response.status).toBe(429);
      }
    }, 70000);
  });
  describe('/task/1h', () => {
    it('should allow 100 requests within a minute without exceeding rate limit', async () => {
      try {
        await makeRequests(`${baseURL}/task/1h`, 100);
        await axios.get(`${baseURL}/task/1h`);
      } catch (error) {
        expect(error.response.status).toBe(429);
      }
    }, 70000);
  });
});
