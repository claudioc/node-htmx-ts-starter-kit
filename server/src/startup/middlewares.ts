import { Express } from 'express';
import path from 'path';

export default (app: Express, express: any) =>
  app.use('/a', express.static(path.join(__dirname, '../../assets')));
