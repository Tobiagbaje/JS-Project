// Define a class to represent NFTs
class NFT {
  constructor(nftName, description, imageLink) {
    this.name = nftName;
    this.description = description;
    this.image = imageLink;
  }
}

// Create an array to store NFTs
let nfts = [];

// Function to mint (create) a new NFT and add it to the array
function mintNFT(nftName, description, imageLink) {
  // Create a new NFT instance using the provided data
  const nft = new NFT(nftName, description, imageLink);
  
  // Add the new NFT to the array
  nfts.push(nft);
}

// Function to list all NFTs along with their metadata
function listNFTs() {
  // Iterate through each NFT in the array
  nfts.forEach((nft, index) => {
    console.log(`NFT ${index + 1}:`);
    console.log("Name:", nft.name);
    console.log("Description:", nft.description);
    console.log("Image:", nft.image);
    console.log("==============");
  });
}

// Function to get the total supply (count) of minted NFTs
function getTotalSupply() {
  console.log("Total Supply of NFTs:", nfts.length);
}

// Mint (create) NFTs and add them to the array
mintNFT("First", "First NFT", "image1.jpg");
mintNFT("Second", "Second NFT", "image2.jpg");
mintNFT("Third", "Third NFT", "image3.jpg");
mintNFT("Fourth", "Fourth NFT", "image4.jpg");

// List all minted NFTs and their metadata
listNFTs();

// Display the total supply of minted NFTs
getTotalSupply();