import { Express, Request, Response } from 'express';

export default (app: Express) =>
  app

    .get('/', async (req: Request, res: Response) => {
      res.render('index', {
        currentTime: new Date().toISOString(),
      });
    })

    .get('/api/current-time', async (req: Request, res: Response) => {
      res.render('partials/currentTime', {
        currentTime: new Date().toISOString(),
      });
    });
