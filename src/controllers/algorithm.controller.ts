import { Request, Response } from 'express';

import { performance } from 'perf_hooks';

import EditDistance from '../helpers/algorithms';
import dictionary from '../helpers/dictionary';

interface Words {
  firstWord: string;
  secondWord: string;
}

interface Word {
  word: string;
}

interface CustomRequest<T> extends Request {
  body: T;
}

interface Calculated {
  word: string;
  result: number;
}

class AlgorithmController {
  public name = 'algorithm';

  findDistance = (request: CustomRequest<Words>, response: Response): Response => {
    try {
      const { firstWord, secondWord }: { firstWord: string; secondWord: string } = request.body;

      const t0 = performance.now();
      const editDistance = new EditDistance(firstWord, secondWord);
      const t1 = performance.now();

      return response.json({
        result: editDistance.result,
        timer: (t1 - t0) / 1000,
      });
    } catch (e) {
      return response.status(404).send({ error: { message: 'An error has been occurred' } });
    }
  };

  spellCheck = (request: CustomRequest<Word>, response: Response): Response => {
    try {
      const { word }: { word: string } = request.body;

      const t0 = performance.now();
      const words = dictionary;

      let result;
      if (words.includes(word)) {
        const t1 = performance.now();
        result = {
          result: null,
          isIncluded: true,
          timer: (t1 - t0) / 1000,
        };
      } else {
        const calculatedList: Calculated[] = [];
        words.forEach((x: string) => {
          const editDistance = new EditDistance(word, x);
          const calculated = {
            word: x,
            result: editDistance.result,
          };
          calculatedList.push(calculated);
        });
        calculatedList.sort((a, b) => a.result - b.result);
        const t1 = performance.now();
        result = {
          result: calculatedList.slice(0, 10),
          isIncluded: false,
          timer: (t1 - t0) / 1000,
        };
      }

      return response.json(result);
    } catch (e) {
      return response.status(404).send({ error: { message: 'An error has been occurred' } });
    }
  };
}

export default AlgorithmController;
