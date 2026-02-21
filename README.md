# Angular basic

[Azure Static Web Apps](https://docs.microsoft.com/azure/static-web-apps/overview) allows you to easily build [Angular](https://angular.io/) apps in minutes. Use this repo with the [Angular quickstart](https://docs.microsoft.com/azure/static-web-apps/getting-started?tabs=angular) to build and customize a new static site.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli).

## Project setup

```bash
npm install
```

### Start the dev server

```bash
npm run swa:start
```

> Note: This command will use the local configuration file `swa-cli.config.json`.

### Run unit tests

```bash
npm test
```

### Run e2e tests

```bash
npm run e2e
```

### Lints and fixes files

```bash
npm run lint
```

### Compiles and minifies for production

```bash
npm run build
```

### Login to Azure

```bash
npm run swa:login
```

### Deploy to Azure

```bash
npm run swa:deploy
```

## GitHub Personal Access Token

Some operations (such as deploying via the SWA CLI or interacting with the GitHub API) require a GitHub Personal Access Token (PAT) with `repo` permissions.

### How to create a GitHub Personal Access Token

1. Go to [GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)](https://github.com/settings/tokens).
2. Click **Generate new token** → **Generate new token (classic)**.
3. Give the token a descriptive **Note** (e.g. `angular-static-webapp deploy`).
4. Under **Select scopes**, check the **`repo`** scope (this grants full control of private repositories).
5. Click **Generate token** and copy the token value immediately — it will not be shown again.

### Where to use the token

- **GitHub Actions / CI:** Add the token as a repository secret named `GH_TOKEN` (or whatever name your workflow references) under **Settings → Secrets and variables → Actions → New repository secret**.
- **Local development:** Set the token as an environment variable, for example:
  ```bash
  export GH_TOKEN=<your-token>
  ```
  You can also store it in a `.env` file (make sure `.env` is listed in `.gitignore` so it is never committed).
