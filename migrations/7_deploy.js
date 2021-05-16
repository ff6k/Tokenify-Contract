
// Deploy Exchange Contract
const ExchangeV1 = artifacts.require('ExchangeV1');
// TransferProxy _transferProxy, TransferProxyForDeprecated _transferProxyForDeprecated, ERC20TransferProxy _erc20TransferProxy, ExchangeStateV1 _state,
// ExchangeOrdersHolderV1 _ordersHolder, address payable _beneficiary, address _buyerFeeSigner
module.exports = async function (deployer, network, accounts) {
    const _transferProxy = "0x49216550BA8D6Edb2239F127182A4a44139D3A47";
    const _transferProxyForDeprecated = "0xf661A2b79E05f2D8c59Ab1D119AE8624E97B9c03";
    const _erc20TransferProxy = "0x22974A39C65c452428ec6c26D201eE22f3313402";
    const _state = "0xF279ac3BfB8021175b2aD8a6e7684C90C0e5Ab93";
    const _ordersHolder = "0xEF23A72835a1E4df5a3E72AE10e1bbd3e5f21910";
    const _beneficiary = "0x27D9D39eE3a82A11Dd5105FEaac63E01b8aEDD41";  // Snipix
    const _buyerFeeSigner = "0xc99dA7fC1c2c3BCd46B3469A13bAA373144fFF25";  // Pixcoin
    await deployer.deploy(ExchangeV1, _transferProxy, _transferProxyForDeprecated, _erc20TransferProxy, _state, _ordersHolder, _beneficiary, _buyerFeeSigner);
};