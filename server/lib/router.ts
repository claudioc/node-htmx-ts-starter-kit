import { Request, Router } from 'express';
import { cssFile, jsFile } from './assets';
import { PageModel, PartialModel, AppResponse } from '../types';
import { PAGE_TITLE } from './constants';

interface IndexPageModel extends PageModel, PartialModel {}

const router = Router();

router
  // Renders the home page
  .get('/', async (_req: Request, res: AppResponse<IndexPageModel>) => {
    res.render('index', {
      title: PAGE_TITLE,
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

router.all('*', (_req, res: AppResponse<PageModel>) => {
  res.status(404).render('404', {
    title: `${PAGE_TITLE} - Page not found`,
    cssFile,
    jsFile,
  });
});

export default router;
