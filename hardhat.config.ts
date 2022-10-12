import "@nomicfoundation/hardhat-toolbox"
import "dotenv/config"
import "@nomiclabs/hardhat-etherscan"
import "./tasks/block-number"
import "./tasks/accounts"
import "hardhat-gas-reporter"
import "solidity-coverage"
import "@typechain/hardhat"

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
        localhost: {
            url: " http://127.0.0.1:8545/",
            // accounts: Hardhat Magic,
            chainId: 31337,
        },
    },
    etherscan: {
        apiKey: process.env.ETHERSCAN_API_KEY,
    },
    gasReporter: {
        enabled: true,
        outputFile: "gas-report.txt",
        noColors: true,
        currency: "USD",
        coinmarketcap: process.env.COIN_MARKET_API_KEY,
    },
}


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
