import request from 'supertest';

import App from '../src/app/app';
import MainRoute from '../src/routes/main.route';
 
const port = 3000

const app = new App(
  [
    new MainRoute(),
  ],
  port,
);

describe('Test MainRoute', () => {
  it('Request /api/v1/main/get should return "This is GET"', async () => {
    const result = await request(app.app).get('/api/v1/main/get').send();

    expect(result.status).toBe(200);
    expect(result.body.message).toBe('This is GET');
  });
  it('Request /api/v1/main/post should return "This is POST"', async () => {
    const result = await request(app.app).post('/api/v1/main/post').send();

    expect(result.status).toBe(200);
    expect(result.body.message).toBe('This is POST');
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