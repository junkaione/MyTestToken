import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const MyTestToken = await ethers.getContractFactory("MyTestToken");
  const MTT = await MyTestToken.deploy("My Test Token", "MTT", 1000000);

  console.log("MyTestToken address:", await MTT.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
