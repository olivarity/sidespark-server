*NOTE: This repository is kept open purely for reference and teaching purposes, development is suspended indefinitely. Feel free to use this code in any way you wish.*

# Sidespark
This is the server code for the Sidespark MVP. For client code, see scaasic/sidespark-client

## Getting Started
Install dependencies locally using `yarn install`.

Necessary configuration files can be found in `/config`. A template is provided as `default.json`. Multiple configuration files can be provided; usage is determined by `$NODE_ENV` (ex: setting `NODE_ENV=dev` will load from `/config/dev.json`).

A running MongoDB instance and Slack API credentials are required. The application will not start unless a database URL and API keys are specified within a config file.

To start the server, run `yarn start`. Defaults to port 5000 unless specified in `$PORT`.

## Production
Docker is used to create production images. The included Dockerfile auto-sets `NODE_ENV=production` and will use `config/production.json` for configuration.
