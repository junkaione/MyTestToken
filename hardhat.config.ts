import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";

dotenv.config();

const { ETH_SEPOILA_URL, PRIVATE_KEY = "" } = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: ETH_SEPOILA_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};

export default config;
