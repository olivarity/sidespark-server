# Sidespark
This is the server code for Sidespark. For client code, see scaasic/sidespark-client

## Getting Started
Install dependencies locally using `yarn install`.

`/utils/config.json` must be configured prior to runtime. Required are a Slack API key and Team ID, a URI to a Mongo database, and a valid protocol and public hostname for the Slack auth callback.

To start the local dev server, run `yarn start`. Defaults to port 5000 unless specified in `$PORT`.

## Production
Production builds are handled by Docker. Running `docker-compose up` will start two containers on a virtual network, one running this app on Node, and another using the stock `mongo` image. Connect the two with the database URI `mongodb://db:27017/<DB_NAME>`.
