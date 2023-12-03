import { Express, Request, Response } from 'express';

export default (app: Express) =>
  app.get('/', async (req: Request, res: Response) => {
    res.render('index');
    // res.send('Hello Express API!');
  });
