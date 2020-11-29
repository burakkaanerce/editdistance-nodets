import { Router } from 'express';
import { Controller } from './Controller';

interface Route {
  path: string;
  router: Router;
  controller: Controller;
}

export default Route;
