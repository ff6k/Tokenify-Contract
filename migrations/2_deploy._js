// TransferProxy contract
const TransferProxy = artifacts.require('TransferProxy');

module.exports = async function (deployer, network, accounts) {
    await deployer.deploy(TransferProxy);
}
