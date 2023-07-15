const { ethers } = require("hardhat");

async function main() {
  // Get the ContractFactory for MyToken
  const MyToken = await ethers.getContractFactory("MyToken");

  // Deploy the contract
  const myToken = await MyToken.deploy();

  // Wait for the contract to be mined
  await myToken.deployed();

  // Print the contract address
  console.log("MyToken deployed to:", myToken.address);
}

// Run the deployment script
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
