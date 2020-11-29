import { Router } from 'express';

import AlgorithmController from '../controllers/algorithm.controller';

import Route from '../types/Route';

class AlgorithmRoute implements Route {
  public path = 'algorithms';

  public router = Router();

  public controller = new AlgorithmController();

  constructor() {
    this.router.post('/find-distance', this.controller.findDistance);
    this.router.post('/spell-check', this.controller.spellCheck);
  }
}

export default AlgorithmRoute;
