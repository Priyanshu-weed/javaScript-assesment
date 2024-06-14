/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let nfts = [];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(artName, artist, creationDate, description) {
   
    let nft = {
        artName: artName,
        artist: artist,
        creationDate: creationDate,
        description: description
    };
    
    nfts.push(nft);
}




// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {

    for (let i = 0; i < nfts.length; i++) {
        console.log(`Art Name: ${nfts[i].artName}`);
        console.log(`Artist: ${nfts[i].artist}`);
        console.log(`Creation Date: ${nfts[i].creationDate}`);
        console.log(`Description: ${nfts[i].description}`);
        console.log('----------------------');
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return nfts.length;
}

// call your functions below this line
mintNFT("Sunset Overdrive", "Jane Doe", "2024-05-29", "A beautiful sunset over the mountains.");
mintNFT("Sea to Heaven", "John Smith", "2024-05-30", "A refreshing view of the sea during sunrise.");
mintNFT("Urban Spectrum", "Alice Johnson", "2024-06-01", "A stunning depiction of city lights at night.");
mintNFT("Stary Night", "Arun", "2024-06-07", "A stunning depiction of stars in the clear sky.");


listNFTs();

console.log(`Total Supply: ${getTotalSupply()}`);

