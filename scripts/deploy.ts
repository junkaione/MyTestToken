import { ethers } from "hardhat";

async function main() {
  const MyTestToken = await ethers.deployContract("MyTestToken");
  console.log("Deploying contract.....");
  await MyTestToken.waitForDeployment();
  console.log(`MyTestToken deployed to ${MyTestToken.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
