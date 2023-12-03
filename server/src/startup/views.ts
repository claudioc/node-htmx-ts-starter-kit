import { Express } from 'express';
import path from 'path';

export default (app: Express) => {
  app.set('views', path.join(__dirname, '../views'));
  app.set('view engine', 'ejs');
};
