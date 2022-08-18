import { NOTFOUND } from "dns";
import { ethers } from "hardhat";

//transaction hash: 0x7283f76abedaf1ea02b7838b98195bb837481662400443c54bb3280bca84dbe1

async function main() {
  let COIN_MINTER = ethers.getContractFactory("CoinMinter")
  let coinMinter = await (await COIN_MINTER).deploy()
  const amount = ethers.utils.parseUnits("5000", "18")

  await coinMinter.mint("0x3ce75accac8a648e1b2d405e3e14d8b2da5f7656", amount)
  await coinMinter.getBalance(coinMinter.address)
  await coinMinter.deployed()

  console.log(`contract deployed to ${coinMinter.address} minted balance: ${ (await coinMinter.getBalance(coinMinter.address)).toString()}`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
