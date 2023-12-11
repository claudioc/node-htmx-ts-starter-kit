import { Express, Request, Response } from 'express';
import { cssFile, jsFile } from './assets';

/* The following 3 interfaces are of course up to you to define and keep using */

interface PartialModel {
  currentTime: string;
}

interface IndexModel extends PartialModel {
  cssFile: string;
  jsFile: string;
}

interface AppResponse<T> extends Omit<Response, 'render'> {
  render(view: string, options: T): void;
}

export default (app: Express) =>
  app
    // Renders the home page
    .get('/', async (req: Request, res: AppResponse<IndexModel>) => {
      res.render('index', {
        cssFile,
        jsFile,
        currentTime: new Date().toISOString(),
      });
    })

    // Renders the server time partial upon HTMX request
    .get(
      '/api/server-time',
      async (req: Request, res: AppResponse<PartialModel>) => {
        res.render('partials/serverTime', {
          currentTime: new Date().toISOString(),
        });
      }
    );
