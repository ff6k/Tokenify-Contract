// ERC20TransferProxy Contract
const ERC20TransferProxy = artifacts.require('ERC20TransferProxy');

module.exports = async function (deployer, network, accounts) {
    await deployer.deploy(ERC20TransferProxy);
}