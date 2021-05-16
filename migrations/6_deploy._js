
// Deploy ExchangeOrdersHolderV1 Contract
const ExchangeOrdersHolderV1 = artifacts.require('ExchangeOrdersHolderV1');

module.exports = async function (deployer, network, accounts) {
    await deployer.deploy(ExchangeOrdersHolderV1);
};