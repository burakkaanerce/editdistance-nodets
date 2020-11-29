import { Router } from 'express';

import AlgorithmController from '../controllers/algorithm.controller';
 
class AlgorithmRoute {
  public path = 'algorithms';
  public router = Router();
  public controller = new AlgorithmController();
 
  constructor() {
    this.router.post('/find-distance', this.controller.findDistance);
  }
}
 
export default AlgorithmRoute;