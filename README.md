# EtherPUBG

[![Build Status](https://travis-ci.org/ChrisCates/EtherPUBG.svg?branch=master)](https://travis-ci.org/ChrisCates/EtherPUBG)
[![Coverage Status](https://coveralls.io/repos/github/ChrisCates/EtherPUBG/badge.svg?branch=master)](https://coveralls.io/github/ChrisCates/EtherPUBG?branch=master)

This is an Angular Web App built on 6.2.6. The Solidity contracts are compiled using truffle.

## Deploying smart contracts

To deploy solidity smart contracts please review the documentation in the [solidity folder](solidity/README.md).

## Running Web App

In order to run the web app it's fairly simple. If you're looking to setup the solidity smart contract. I suggest checkout out `/solidity/README.md` to setup and configure that aspect of the web application.

```bash
# Install yarn
curl --compressed -o- -L https://yarnpkg.com/install.sh | bash

# Install typescript, angular cli
yarn global add typescript @angular/cli

# In root directory install node_modules
yarn

# Serve the angular app
ng serve
```

## Additional Notes

- Any questions or concerns email hello@chriscates.ca

- MIT Licensed :heart:

- `deploy.sh` is just to build and publish to gh-pages.
