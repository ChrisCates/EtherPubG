let Pubg = artifacts.require('Pubg');

contract('Pubg', (accounts) => {

    let account1 = accounts[0];
    let account2 = accounts[1];

    it('Should purchase a Rare AWM Skin for 1 ETH', done => {
        Pubg.deployed().then(contract => {
            return contract.PurchaseItem(
                account2, 
                'Rare AWM Skin',
                {
                    from: account1,
                    value: Math.pow(10, 18)
                }
            ).then((result) => {
                console.log('Transaction successful, TXID: ', result.tx);
                done();
            })
        })
    })

})