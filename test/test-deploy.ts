// Test for SimpleStorage
import { expect, assert } from "chai"
import { ethers } from "hardhat"
import {SimpleStorage ,SimpleStorage__factory} from "../typechain-types"
describe("SimpleStorage", () => {
    // before each it()
    let SimpleStorageFactory:SimpleStorage__factory
    let simpleStorage : SimpleStorage
    beforeEach(
        // befire each it() we want to deploy our contract
        async () => {
            SimpleStorageFactory = await ethers.getContractFactory(
                "SimpleStorage"
            )
            simpleStorage = await SimpleStorageFactory.deploy()
        }
    )

    //actual test
    it("Should start with a favorite number of 0", async () => {
        const currentVal = await simpleStorage.retrieve()
        const expectedVal = "0"
        assert.equal(currentVal.toString(), expectedVal)
    })
    it("Should update when we call store", async () => {
        const expectedValue = "7"
        const transactionResponse = await simpleStorage.store(expectedValue)
        const currentVal = await simpleStorage.retrieve()
        assert.equal(currentVal.toString(), expectedValue)
    })
    // it()
    // it()
})
