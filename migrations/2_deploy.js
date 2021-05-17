let Tokenify = artifacts.require("Tokenify");

module.exports = function(deployer) {
  deployer.deploy(Tokenify);
};