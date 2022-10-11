require("@nomicfoundation/hardhat-toolbox")
require("dotenv").config()
require("@nomiclabs/hardhat-etherscan")

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: "0.8.17",
    defaultNetwork: "hardhat",
    networks: {
        goreli: {
            url: process.env.GORELI_RPC_URL,
            accounts: [process.env.PRIVATE_KEY],
            chainId: 5,
        },
    },
    etherscan: {
        apiKey: process.env.ETHERSCAN_API_KEY,
    },
}

task("accounts", "Prints the list of accounts", async () => {
    const accounts = await ethers.getSigners()

    for (const account of accounts) {
        console.log(account.address)
    }
})
// const {
//   TASK_COMPILE_SOLIDITY_GET_SOLC_BUILD,
// } = require("hardhat/builtin-tasks/task-names");
// const path = require("path");

// subtask(TASK_COMPILE_SOLIDITY_GET_SOLC_BUILD, async (args, hre, runSuper) => {
//   if (args.solcVersion === "0.8.17") {
//     const compilerPath = path.join(
//       __dirname,
//       "soljson-v0.8.17-nightly.2021.5.12+commit.98e2b4e5.js"
//     );

//     return {
//       compilerPath,
//       isSolcJs: true, // if you are using a native compiler, set this to false
//       version: args.solcVersion,
//       // this is used as extra information in the build-info files, but other than
//       // that is not important
//       longVersion: "0.8.17-nightly.2021.5.12+commit.98e2b4e5",
//     };
//   }

//   // we just use the default subtask if the version is not 0.8.5
//   return runSuper();
// });
