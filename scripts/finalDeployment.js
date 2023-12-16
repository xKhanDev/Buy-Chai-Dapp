const hre = require("hardhat");

async function main() {
    const Chai = await hre.ethers.getContractFactory("chai");
    const chai = await Chai.deploy();

    console.log('Contract address:', chai.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
