const hre = require("hardhat");

async function main() {

  const Nft = await hre.ethers.getContractFactory("woasERC721");
  const nft = await Nft.deploy("AmirAbasTavakoli", "AAT");

  await nft.deployed();

  console.log("ERC721 deployed to:", nft.address);

  await nft.mint("https://ipfs.io/ipfs/QmeA24wKn7DipGnhz7MoV2xW9wppLe7b1DArD7D8VBXsLG");
  console.log("NFT Success Mint");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
