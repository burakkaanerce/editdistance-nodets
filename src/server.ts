import App from './app/app';
import AlgorithmRoute from './routes/algorithm.route';
 
const port = 3000

export const app = new App(
  [
    new AlgorithmRoute()
  ],
  port,
);
 
app.listen();