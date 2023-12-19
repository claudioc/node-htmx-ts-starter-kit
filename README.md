# Express + TypeScript + HTMX starter kit

Motivation: **I am sick of React and frontend building and bundling issues. I just want to build staff**.

The goal of this starter kit is to provide a slightly opinionated but super simple way to get started with a project that has some logic on the backend and some logic on the frontend. A typical use case could be a single page that fetches some information from a third-party API, but you also want to have a small backend where to keep your API keys and maybe a cache to avoid hitting a rate limit on those external API.

The kit contains:
- A server ([Expressjs](https://expressjs.com/) with some middlewares)
- A client (just TypeScript, no frameworks, which you can extend with your logic)
- A demo micro application: reads the current server time and displays it in the browser, auto-refreshing every 30s (or manually)
- Server side error handling
- Linting

## Tech stack
- Good ol' [Expressjs](https://expressjs.com/) - but you should consider using [Fastify](https://fastify.dev/) instead
- [EJS](https://ejs.co/) templates
- TypeScript
- [HTMX](https://htmx.org/) for the frontend to speak to the backend
- [Chota](https://jenil.github.io/chota/) framework for the CSS, because it's small and cute

I am not even using `ts-node` because it's not needed for a small project.

### Express middlewares:
- Helmet for security
- CORS just in case
- Morgan for the logs

### Additional tools provided:
- concurrently
- nodemon
- dotenv
- eslint with ts support (extends just the recommended rule set)
- prettier and a bare-bone config
- client's and server's own tsconfig which extends a base one

### Bonus
- There is an example of how to write a HTMX extension
- Configurations are all in the package.json

## Try it

Note that it doesn't work on Windows out-of-the-box (makes use of symlinks and bash).

- npm i
- npm run dev
- open http://localhost:3000

You also have `npm lint`, `npm build` and of course `npm start` (for production).

## Use it in your project

Some options:

- Download the latest archive from [Github releases](https://github.com/claudioc/node-htmx-ts-starter-kit/releases) or from the "Code" button in the repository main page
- Clone the repo, and then `rm -rf` its `.git` directory (github doesn't support `git archive` and git doesn't have a `export` command like svn does)

This project uses ESLint and Prettier: don't forget to install/enable their extension in Visual Studio Code.

To not mess things up, we are not using "eslint-prettier" or similar, but you can try it if you want.

## Deployment

This is on you. I own a small VPS and I run all my projects from there. Ideally, you want to run this process behind a reverse proxy where you also end your TLS connection. I use ngnix and letsencrypt for my tls certificates.

If you have successfully deployed a project inherited from this kit, in some cloud, and you want to share the steps please open a PR!

## What is missing
- Express' body-parser is not installed ([see the doc](https://expressjs.com/en/resources/middleware/body-parser.html)) because I didn't have to POST anything
- no cookie support, because we hate cookie banners
- Assets are not tgz compressed because this should be the job of your reverse proxy
- I use ejs for its simplicity but I don't like not having a type checking in the templates. It should be nice to use JSX, but the risk is to complicate things too much

A testing system is also not installed by default, but if you are like me and love [Vitest](https://vitest.dev/), just follow these instructions (for the client, but it should work for the server as well):

- `npm install vitest --save-dev`
- Edit `client/tsconfig.json` and add an `exclude` option for your tests: this is because vitest doesn't use `tsc` for the typescript sources and you should tell `tsc` to not compile and build the tests
- Add a `test` script in your package.json with something like `vitest ./client/**/*.spec.ts`
- Since we are excluding tests from the TS projects, eslint won't be able to find them anymore and we need to put them back somewhere. To do so, you can [follow these instructions](https://typescript-eslint.io/linting/troubleshooting/#i-get-errors-telling-me-eslint-was-configured-to-run--however-that-tsconfig-does-not--none-of-those-tsconfigs-include-this-file). I would add a `tsconfig.eslint.json` which extends our base, doesn't emit and includes the test files
- Write your tests away!
