import express from 'express';

var logger = require('morgan');
 
class App {
  public app: express.Application;
  public port: number;
 
  constructor(routes: any, port: number) {
    this.app = express();
    this.port = port;
 
    this.initializeMiddlewares();
    this.initializeRoutes(routes);
  }
 
  private initializeMiddlewares() {
    this.app.use(express.json());
    this.app.use(logger('dev'));
  }
 
  private initializeRoutes(routes: any) {
    routes.forEach((route: any) => {
      this.app.use(`/api/${route.path}`, route.router);
    });
  }
 
  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}
 
export default App;