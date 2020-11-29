import request from 'supertest';

import { app } from '../src/server';

describe('Test MainRoute', () => {
  it('/api/v1/algorithms/find-distance"', async (done) => {
    const result = await request(app.app)
      .post('/api/v1/algorithms/find-distance')
      .send({ firstWord: 'deneme', secondWord: 'menemen'});

    expect(result.status).toBe(200);
    expect(result.body.result).toBe(2);

    console.log("timer: ", result.body.timer);
    done();
  });
});
