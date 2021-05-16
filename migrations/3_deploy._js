// TransferProxyForDeprecated Contract
const TransferProxyForDeprecated = artifacts.require('TransferProxyForDeprecated');

module.exports = async function (deployer, network, accounts) {
    await deployer.deploy(TransferProxyForDeprecated);
}