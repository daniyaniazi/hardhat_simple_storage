const { ethers, run, network } = require("hardhat")

async function main() {
    const SimpleStorageFactory = await ethers.getContractFactory(
        "SimpleStorage"
    )
    console.log("Deploying Contract....")
    const simpleStorage = await SimpleStorageFactory.deploy()
    await simpleStorage.deployed()
    console.log("Contract deployed to : ", simpleStorage.address)
    //verify
    if (network.config.chainId == 5 && process.env.ETHERSCAN_API_KEY) {
        await simpleStorage.deployTransaction.wait(6)
        await verifyContract(simpleStorage.address, [])
    }

    // interact with contract
    const currentValue = await simpleStorage.retrieve()
    console.log("Current Fav Value : ", currentValue)

    // update state
    const storeTransaction = await simpleStorage.store(6)
    await storeTransaction.wait(1)
    const updatedVal = await simpleStorage.retrieve()
    console.log("Updated Value Fav Value : ", updatedVal)
}

async function verifyContract(contrcatAddress, args) {
    console.log("Verifying contract")
    try {
        await run("verify:verify", {
            address: contrcatAddress,
            constructorArguments: args,
        })
    } catch (error) {
        if (error.mesage.toLowerCase().includes("already verified")) {
            console.log("Already Verified")
        } else {
            console.error(error)
        }
    }
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
