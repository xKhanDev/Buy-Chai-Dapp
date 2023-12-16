const hre = require("hardhat");

async function getBalances(address) {
  const balanceBigInt = await hre.ethers.provider.getBalance(address);
  return hre.ethers.formatEther(balanceBigInt);
}

async function consoleBalances(addresses) {
  let counter = 0;
  for (const address of addresses) {
    console.log(`address ${counter} balance:`, await getBalances(address));
    counter++;
  }
}

async function consoleMemos(memos) {
  for (const memo of memos) {
    const timestamp = memo.timestamp;
    const name = memo.name;
    const from = memo.from;
    const message = memo.massage;
    console.log(`At: ${timestamp} name: ${name} from: ${from}, message: ${message}`);
  }
}

// main function
async function main() {
  const [owner, from1, from2, from3] = await hre.ethers.getSigners();
  const chai = await hre.ethers.getContractFactory("chai");
  const contract = await chai.deploy();

   console.log('owner address is :',contract.address);

  const addresses = [owner.address, from1.address, from2.address, from3.address];
  console.log("Before buying Chai");
  await consoleBalances(addresses);

  const amount = { value: hre.ethers.parseEther("1") };
  await contract.connect(from1).buyChai("from1", "fazol chai", amount);
  await contract.connect(from2).buyChai("from2", "fazolthaar chai", amount);
  await contract.connect(from3).buyChai("from3", "fazolthareeeeeeeeeeeeen chai", amount);

  console.log("After buying Chai");
  await consoleBalances(addresses);

  const memos = await contract.getMemos();
  consoleMemos(memos);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
