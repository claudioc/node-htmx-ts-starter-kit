import express from 'express';
import path from 'path';
import morgan from 'morgan';
import helmet from 'helmet';
import router from './router';
import dotenv from 'dotenv';
import { handleClientError, handleUnhandledError } from './errorHandlers';
import { ASSETS_MOUNT_POINT, ASSETS_PATH, VIEWS_PATH } from './constants.js';

dotenv.config();

const app = express();

app
  .set('views', path.join(__dirname, VIEWS_PATH))
  .set('view engine', 'ejs')
  // HTTP request logger middleware for node.js
  .use(morgan(process.env.NODE_ENV === 'production' ? 'common' : 'dev'))
  // Serve static content for the app from the "assets" directory
  // Note that the asset folder contains symlinks to the client/dist folder
  .use(
    `/${ASSETS_MOUNT_POINT}`,
    express.static(path.join(__dirname, ASSETS_PATH))
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
