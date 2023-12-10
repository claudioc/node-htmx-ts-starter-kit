import { Express, Request, Response } from 'express';
import { cssFile, jsFile } from './assets';

export default (app: Express) =>
  app
    // Renders the home page
    .get('/', async (req: Request, res: Response) => {
      res.render('index', {
        cssFile,
        jsFile,
        currentTime: new Date().toISOString(),
      });
    })

    // Renders the server time partial upon HTMX request
    .get('/api/server-time', async (req: Request, res: Response) => {
      res.render('partials/serverTime', {
        currentTime: new Date().toISOString(),
      });
    });
