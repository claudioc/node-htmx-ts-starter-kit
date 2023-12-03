import { Express } from 'express';
import path from 'path';

export default (app: Express) => {
  // Since we are not using ts-node, and we are running from the dist folder,
  // the views folder is not available in the dist folder when developing.
  const viewsPath =
    process.env.NODE_ENV === 'production'
      ? path.join(__dirname, '../views')
      : path.join(__dirname, '../../../server/src/views');
  app.set('views', viewsPath);
  app.set('view engine', 'ejs');
};
