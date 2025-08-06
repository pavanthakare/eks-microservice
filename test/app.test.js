const app = require('../app');
const request = require('supertest');

let server;

beforeAll(() => {
  server = app.listen(4000); // use a test port
});

afterAll((done) => {
  server.close(done);
});

describe('GET /', () => {
  it('should return 200 and hello message', async () => {
    const res = await request(server).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('Hello from Microservice A!');
  });
});
