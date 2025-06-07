# What is this project?

Facebook like app, created for learning purposes. It will allow to create posts, upload videos, add comments etc. It will also have ai-powered features (recomendations, insights).

# How to run

## Prerequisites

- docker with compose plugin (refer to [docker documentation](https://docs.docker.com/))

## Startup

You can either run whole backend at once (by executing this [script](./startup.sh)) or one part (for example by executing this [script](./posts/startup.sh))

**warning**: _when executing script on linux (`./startup.sh`) you may need to give it execution permissions by running `chmod u+x ./startup.sh` command before running the script._

**info**: _if you want to run backend on windows simply change script extension to `.bat`, rest stays the same_

**info**: _more information about startup is [here](./docs/startup.md)_

# Documentation

General documentation is (or will be) in the [docs](./docs/) folder, while documentation for specific services will be in `./service-name/docs` folder (for example [posts service documenation](./posts/docs)).
