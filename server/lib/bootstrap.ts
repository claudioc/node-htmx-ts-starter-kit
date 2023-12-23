import express from 'express';
import path from 'path';
import morgan from 'morgan';
import helmet from 'helmet';
import router from './router';
import dotenv from 'dotenv';
import { handleClientError, handleUnhandledError } from './errorHandlers';
import { ASSETS_FOLDER } from './constants.js';

dotenv.config();

const app = express();

// Since we are not using ts-node, and we are running from the dist folder,
// the views folder is not available in the dist folder when developing.
const viewsPath =
  process.env.NODE_ENV === 'production' ? '../views' : '../../../server/views';

app
  .set('views', path.join(__dirname, viewsPath))
  .set('view engine', 'ejs')
  // HTTP request logger middleware for node.js
  .use(morgan(process.env.NODE_ENV === 'production' ? 'common' : 'dev'))
  // Serve static content for the app from the "assets" directory
  // Note that the asset folder contains symlinks to the client/dist folder
  .use(
    `/${ASSETS_FOLDER}`,
    express.static(path.join(__dirname, '../../../assets'))
  )
  .use(
    helmet({
      // If you get stuck in CSP, try this: crossOriginEmbedderPolicy: false,
      contentSecurityPolicy: {
        directives: {
          'script-src': ["'self'", "'unsafe-inline'"],
        },
      },
    })
  )
  .use(express.json())
  .use('/', router)
  .use(handleClientError)
  .use(handleUnhandledError);

export default () => app;
