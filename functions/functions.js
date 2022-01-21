/*
Available deployed contracts
Ethereum Rinkeby 0x0Fb6EF3505b9c52Ed39595433a21aF9B5FCc4431
Polygon Mumbai 0x351bbee7C6E9268A1BF741B098448477E08A0a53
BSC Testnet 0x88624DD1c725C6A95E223170fa99ddB22E1C6DDD
*/
var info = 'none given'
var nft_contract_address='';
function init()
{console.log('test');

  web3 = new Web3(window.web3.currentProvider);
 nft_contract_address = "0x452f45d2f9501a3BC9d93767Ee443aE4D50FE1AE" //NFT Minting Contract Use This One "Batteries Included", code of this contract is in the github repository under contract_base for your reference.
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



async function upload(){
    try {
      await web3.currentProvider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x4" }]
      });
    } catch (error) {
      alert(error.message);
    }
    
    var Contract = require('web3-eth-contract');
    nft_contract_address='0x452f45d2f9501a3BC9d93767Ee443aE4D50FE1AE';
    
    
    const requestValidation = await mintToken()
    
  }
  
  async function mintToken(){
    info = "e";
    console.log("info :",info)
    web3 = new Web3(window.web3.currentProvider);
    const encodedFunction = web3.eth.abi.encodeFunctionCall({
  
      "inputs": [
        {
          "internalType": "string",
          "name": "_info",
          "type": "string"
        }
      ],
      "name": "mintToken",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },[info]);
  console.log('encode fct done')
    const transactionParameters = {
      to: nft_contract_address,
      from: ethereum.selectedAddress,
      data: encodedFunction
    };
    const txt = await ethereum.request({
      method: 'eth_sendTransaction',
      params: [transactionParameters]
    });
    return txt
  }
  

export {
  login,upload
}