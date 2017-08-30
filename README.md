# Sidespark
This is the server code for Sidespark. For client code, see scaasic/sidespark-client

## Getting Started
Install dependencies locally using `yarn install`.

Necessary configuration files can be found in `/config`. A template is provided as `default.json`. Multiple configuration files can be provided; usage is determined by `$NODE_ENV` (ex: setting `NODE_ENV=dev` will load from `/config/dev.json`).

To start the server, run `yarn start`. Defaults to port 5000 unless specified in `$PORT`.

## Production
Production builds can be found as Docker images in the registry. New builds can be created using the included Dockerfile, which will set the environment to 'production' for configuration purposes.
