import App from './app/app.js';
import MainRoute from './routes/main.route.js';
 
const port = 3000

const app = new App(
  [
    new MainRoute(),
  ],
  port,
);
 
app.listen();