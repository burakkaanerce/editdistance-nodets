import App from './app/app';
import AlgorithmRoute from './routes/algorithm.route';

const port = 3000;

const app = new App([new AlgorithmRoute()], port);

export default app;

app.listen();
