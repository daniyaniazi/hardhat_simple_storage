const { task } = require("hardhat/config")

task("block-number", "Print the number of block").setAction(
    async (taskArgs, hre) => {
        // hre == hardhat package services
        console.log(
            "Current Block Number",
            await hre.ethers.provider.getBlockNumber()
        )
    }
)
