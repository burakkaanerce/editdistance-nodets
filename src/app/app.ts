import express from 'express';

import createError from 'http-errors';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import bodyParser from 'body-parser';
import cors from 'cors';

var corsOptions = {
  origin: "*"
};
 
class App {
  public app: express.Application;
  public port: number;
 
  constructor(routes: any, port: number) {
    this.app = express();
    this.port = port;
 
    this.initializeMiddlewares();
    this.initializeParsers();
    this.initializeRoutes(routes);
    this.initializeErrorHandlers();
  }
 
  private initializeMiddlewares() {
    this.app.use(logger('dev'));
  }
 
  private initializeRoutes(routes: any) {
    routes.forEach((route: any) => {
      this.app.use(`/api/v1/${route.path}`, route.router);
    });
  }

  private initializeParsers() {
    this.app.use(cors(corsOptions));

    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(cookieParser());
    this.app.use(express.static(path.join(__dirname, 'public')));
  }

  private initializeErrorHandlers() {
    this.app.use((req: any, res: any, next: any) => {
      next(createError(404));
    });

    this.app.use((err: any, req: any, res: any, next: any) => {
      res.locals.message = err.message;
      res.locals.error = req.app.get('env') === 'development' ? err : {};

      res.status(err.status || 500);
      res.render('error');
    });
  }
 
  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}
 
export default App;