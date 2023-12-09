# Express + Typescript + HTMX starter kit

Motivation: **I am sick of React and frontend building issues. I just want to build staff**.

The goal of this starter kit is to provide a slightly opinionated but super simple way to get started with a project that has some logic on the backend and some logic on the frontend. A typical use case could be a single page that fetches some information from a third-party API, but you also want to have a small backend where to keep your API keys and maybe a cache to avoid hitting a rate limit on those external API.

The kit contains:
- A server (expressjs with some middlewares)
- A client (just TypeScript, no frameworks, which you can extend with your logic)
- The kit itself does something, as a demo micro application - it reads the current server time and displays it in the browser

## Tech stack
- Good ol' [Expressjs](https://expressjs.com/)
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
- eslint (extends airbnb)
- prettier and a bare-bone config

### Bonus
- There is an example of how to write a HTMX extension
- Configurations are all in the package.json

## Try it

Note that it doesn't work on Windows out-of-the-box (makes use of symlinks and bash).

- npm i
- npm run dev

You also have `npm lint`, `npm build` and of course `npm start` (for production).

## Use it

Some options:

- Download the latest archive from [Github releases](https://github.com/claudioc/node-htmx-ts-starter-kit/releases) or from the "Code" button in the repository main page
- Clone the repo, and then `rm -rf` its `.git` directory (github doesn't support `git archive` and git doesn't have a `export` command like svn does)

## Deployment

This is on you. I own a small VPS and I run all my projects from there. Ideally, you want to run this process behind a reverse proxy where you also end your TLS connection. I use ngnix and letsencrypt for my tls certificates.

If you have successfully deployed a project inherited from this kit, in some cloud, and you want to share the steps please open a PR!

## What is missing
- Express' body-parser is not installed ([see the doc](https://expressjs.com/en/resources/middleware/body-parser.html)) because I didn't have to POST anything
- no cookie support, because we hate cookie banners
- no test support, because YMMV
- Uses .js importing in the client TS
- Assets are not tgz compressed because this should be the job of your reverse proxy
