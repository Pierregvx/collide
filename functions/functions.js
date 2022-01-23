/*
Available deployed contracts
Ethereum Rinkeby 0x0Fb6EF3505b9c52Ed39595433a21aF9B5FCc4431
Polygon Mumbai 0x351bbee7C6E9268A1BF741B098448477E08A0a53
BSC Testnet 0x88624DD1c725C6A95E223170fa99ddB22E1C6DDD
*/
import abi from '../components/Abi'
var info = 'none given'
var nft_contract_address='';
function init()
{console.log('test');

  web3 = new Web3(window.web3.currentProvider);
 nft_contract_address = "0x29A2c24Ba2Aa80461312e71A3B930A0B78494469" //NFT Minting Contract Use This One "Batteries Included", code of this contract is in the github repository under contract_base for your reference.
}
//frontend logic

async function login(){
  
  await window.web3.currentProvider.enable();
  init();
  Moralis.initialize("7fFnU2oaOFBieq0l8I5iMMT1r4njGaBjC0yshCIy"); // Application id from moralis.io
Moralis.serverURL = "https://vuxn1nz2csud.usemoralis.com:2053/server"; //Server url from moralis.io

Moralis.Web3.authenticate()
console.log(web3.currentProvider.chainId)
}



async function upload(metadataURI,price){
    init();
  
    
    nft_contract_address = "0x29A2c24Ba2Aa80461312e71A3B930A0B78494469"
    
    console.log('metadata',metadataURI)
    price *= 1000000000000000000
    var hexString = price.toString(16);
    console.log(hexString);
    
    
    const txt = await mintToken(metadataURI,hexString )
  }
  
  async function mintToken(_uri,hexString ){
    const encodedFunction = web3.eth.abi.encodeFunctionCall(  {
      "inputs": [
        {
          "internalType": "string",
          "name": "tokenURI",
          "type": "string"
        },
        {
          "internalType": "address payable",
          "name": "_royaltiesRecipientAddress",
          "type": "address"
        },
        {
          "internalType": "uint96",
          "name": "_percentageBasicPoints",
          "type": "uint96"
        }
      ],
      "name": "mintAndRoyalties",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },[ _uri,"0x2EB996E2B20fA0084b6BD96308739B36f5B17d18",1000]);
  
    const transactionParameters = {
      to: nft_contract_address,
      from: ethereum.selectedAddress,
      value:hexString ,
      data: encodedFunction
    };
    const txt = await ethereum.request({
      method: 'eth_sendTransaction',
      params: [transactionParameters],

    });
    return txt
  }
  

export {
  login,upload
}