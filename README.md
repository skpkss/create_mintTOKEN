# MyToken

This project contains a Solidity smart contract for creating and managing a custom token called MyToken.

## Smart Contract (MyToken.sol)

The `MyToken.sol` file contains the source code for the MyToken smart contract. It provides the following functionalities:

- Creation of the token with the specified name, symbol, decimals, and initial supply.
- Transfer of tokens from one address to another.
- Burning of tokens by the token holder.
- Minting of new tokens by the contract owner.

## Deployment Script (deploy.js)

The `deploy.js` script is used to deploy the MyToken smart contract on a local Hardhat network. It performs the following steps:

1. Imports the required dependencies from the Hardhat library.
2. Defines an async function called `main`.
3. Retrieves the ContractFactory for MyToken.
4. Deploys the MyToken contract using the `deploy` method.
5. Waits for the contract to be mined and deployed.
6. Logs the address of the deployed contract to the console.

## Getting Started

To use the MyToken contract and deploy it on a local Hardhat network, follow these steps:

1. Install Node.js and npm (if not already installed).
2. Clone this repository to your local machine.
3. Open a terminal and navigate to the project directory.
4. Install the project dependencies by running `npm install`.
5. Modify the `deploy.js` script and Solidity contract (`MyToken.sol`) if needed.
6. Run the deployment script using the command `npx hardhat run scripts/deploy.js --network localhost`.
7. The contract address will be logged to the console upon successful deployment.


# Deploy.js

The `deploy.js` script is used to deploy the MyToken smart contract on a local Hardhat network.

## Usage

1. Install Node.js and npm (if not already installed).

2. Clone this repository to your local machine.

3. Open a terminal and navigate to the project directory.

4. Install the project dependencies by running `npm install`.

5. Modify the script if needed:
    - Update the deployment parameters (e.g., token name, symbol, decimals, and initial supply).
    - Customize any additional deployment logic.

6. Run the deployment script using the following command:
    ```
    npx hardhat run scripts/deploy.js --network <network-name>
    ```
    Replace `<network-name>` with the desired network (e.g., `localhost` for the local Hardhat network).

7. The script will deploy the MyToken contract and log the contract address to the console upon successful deployment.

## Dependencies

- [Hardhat](https://hardhat.org/): A development environment for Ethereum smart contracts.

## License

This project is licensed under the [MIT License](LICENSE).