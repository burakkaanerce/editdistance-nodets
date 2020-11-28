import { Request, Response } from 'express';
 
class MainController {
  constructor() {
  }
 
  public get = (request: Request, response: Response) => {
    response.json({message: 'This is GET'})
  }
 
  public post = (request: Request, response: Response) => {
    response.json({message: 'This is POST'})
  }
}
 
export default MainController;