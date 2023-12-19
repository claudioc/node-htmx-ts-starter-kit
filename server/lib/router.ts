import { Request, Response, Router } from 'express';
import { cssFile, jsFile } from './assets';

/* The following 3 interfaces are of course up to you to define and keep using */

export interface PartialModel {
  currentTime: string;
  error: string | null;
}

export interface IndexModel extends PartialModel {
  cssFile: string;
  jsFile: string;
}

export interface AppResponse<T> extends Omit<Response, 'render'> {
  render(view: string, options: T): void;
}

const router = Router();

router
  // Renders the home page
  .get('/', async (_req: Request, res: AppResponse<IndexModel>) => {
    res.render('index', {
      cssFile,
      jsFile,
      error: null,
      currentTime: new Date().toISOString(),
    });
  });

// Renders the server time partial upon HTMX request
router.get(
  '/api/server-time',
  async (_req: Request, res: AppResponse<PartialModel>) => {
    res.render('partials/serverTime', {
      error: null,
      currentTime: new Date().toISOString(),
    });
  }
);

router.all('*', (_req, res) => {
  res.status(404).send('Not Found');
});

export default router;
