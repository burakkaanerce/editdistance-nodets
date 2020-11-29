import { Request, Response } from 'express';
const {
  performance
} = require('perf_hooks');
import EditDistance from '../helpers/algorithms';

class AlgorithmController {
  constructor() {
  }
 
  public findDistance = (request: Request, response: Response) => {
    const firstWord: string = request.body.firstWord;
    const secondWord: string = request.body.secondWord;

    const t0 = performance.now();
    const editDistance = new EditDistance(firstWord, secondWord);
    const t1 = performance.now();

    response.json({
      result: editDistance.result,
      timer: (t1 - t0) / 1000
    })
  }
}
 
export default AlgorithmController;