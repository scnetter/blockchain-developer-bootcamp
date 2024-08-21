require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

// This is a sample hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

/** 
 * @type import('hardhat/config').HardhatUserConfig 
 */
module.exports = {
  solidity: "0.8.19",
  networks: {
    localhost: {}
  },
};
