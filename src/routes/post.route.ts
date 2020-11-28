import { Router, Request, Response } from 'express';
import Main from './main.interface';
 
class MainController {
  public path = '/main';
  public router = Router();
 
  private main: Main[] = [
    {
      author: 'Marcin',
      content: 'Dolor sit amet',
      title: 'Lorem Ipsum',
    }
  ];
 
  constructor() {
    this.intializeRoutes();
  }
 
  public intializeRoutes() {
    this.router.get(this.path, this.getAllPosts);
    this.router.post(this.path, this.createAPost);
  }
 
  getAllPosts = (request: Request, response: Response) => {
    response.send(this.main);
  }
 
  createAPost = (request: Request, response: Response) => {
    const main: Main = request.body;
    this.main.push(main);
    response.send(main);
  }
}
 
export default MainController;