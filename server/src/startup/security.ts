import cors from 'cors';
import helmet from 'helmet';
import { Express } from 'express';

export default (app: Express, express: any) =>
  app
    .use(
      helmet({
        // crossOriginEmbedderPolicy: false,
        contentSecurityPolicy: {
          directives: {
            'script-src': ['self', 'unpkg.com', 'cdn.tailwindcss.com'],
          },
        },
      })
    )
    .use(cors())
    .use(express.json());
