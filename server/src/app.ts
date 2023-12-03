import express from 'express';
import middlewaresSetup from './startup/middlewares';
import viewsSetup from './startup/views';
import routerSetup from './startup/router';
import securitySetup from './startup/security';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

middlewaresSetup(app, express);
securitySetup(app, express);
routerSetup(app);
viewsSetup(app);

const APP_PORT = process.env.PORT || 3000;

app.listen(APP_PORT, () => {
  console.log(`Server started on port ${APP_PORT}`);
});
