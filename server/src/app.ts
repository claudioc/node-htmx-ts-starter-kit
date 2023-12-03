import bootstrap from './lib/bootstrap';

const app = bootstrap();

const APP_PORT = process.env.PORT || 3000;

app.listen(APP_PORT, () => {
  console.log(`Server started on port ${APP_PORT}`);
});
