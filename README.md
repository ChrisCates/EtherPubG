# EtherPUBG

This is an Angular Web App built on 6.2.6.

## Running

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