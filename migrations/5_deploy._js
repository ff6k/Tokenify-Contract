
// Deploy ExchangeStateV1 Contract
const ExchangeStateV1 = artifacts.require('ExchangeStateV1');

module.exports = async function (deployer, network, accounts) {
    await deployer.deploy(ExchangeStateV1);
};