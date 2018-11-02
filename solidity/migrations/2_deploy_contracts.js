let Pubg = artifacts.require('Pubg');
let fs = require('fs');

module.exports = (deployer) => {
    deployer.deploy(Pubg).then(info => {
        let address = info.address;
        let transaction = info.transactionHash;
        
        let file = JSON.stringify({
            address,
            transaction
        }, null, 2);

        fs.writeFileSync(__dirname + '/../../src/tx.info.json', file, 'UTF-8');
    });
}