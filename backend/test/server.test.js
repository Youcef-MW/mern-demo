const request = require('supertest');
const app = require('../server');

describe('GET /api/health', () => {
  it('should return status 200 and UP state', async () => {
    const res = await request(app).get('/api/health');
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toBe('UP');
    expect(res.body).toHaveProperty('timestamp');
  });
});