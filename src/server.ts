import App from './app/app';
import MainRoute from './routes/main.route';
 
const port = 3000

const app = new App(
  [
    new MainRoute(),
  ],
  port,
);
 
app.listen();