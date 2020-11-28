import { Router } from 'express';

import MainController from '../controllers/main.controller.js';
 
class MainRoute {
  public path = 'main';
  public router = Router();
  public controller = new MainController();
 
  constructor() {
    this.router.get('/get', this.controller.get);
    this.router.post('/post', this.controller.post);
  }
}
 
export default MainRoute;