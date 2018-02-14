var Token = artifacts.require("./CorexToken.sol");

module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(Token,25000000,"COREX","COREX");
};