import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { PRIVATE_KEY } from "./privateKey";



const config: HardhatUserConfig = {
  solidity: "0.8.9",
   defaultNetwork:"rinkeby",
  networks:{
    rinkeby:{
      url:"https://rinkeby.infura.io/v3/65e0825d75f34952bd6cefac0d9fcbc7",
      accounts:[PRIVATE_KEY]
    }
  }
};



export default config;
