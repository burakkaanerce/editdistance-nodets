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

/* import supertest from 'supertest'

import App from '../src/app/app';
import MainRoute from '../src/routes/main.route';
 
const port = 3000

const app = new App(
  [
    new MainRoute(),
  ],
  port,
);

describe('App', () => {
  it('/api/main/get', () =>
    supertest(app.app)
      .get('/api/main/get')
      .expect('Content-Type', /json/)
      .expect(200)
  )
  it('/api/main/post', () =>
    supertest(app.app)
      .post('/api/main/post')
      .expect('Content-Type', /json/)
      .expect(200)
  )
}) */