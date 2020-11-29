import request from 'supertest';

import app from '../src/server';

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
  it('/api/v1/algorithms/spell-check"', async (done) => {
    const result = await request(app.app)
      .post('/api/v1/algorithms/spell-check')
      .send({ word: 'abandonment' });

    expect(result.status).toBe(200);
    expect(result.body.isIncluded).toBe(true);

    console.log("timer: ", result.body.timer);
    done();
  });
});
