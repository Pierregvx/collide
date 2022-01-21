const listUri = ["https://ipfs.moralis.io:2053/ipfs/QmVXsWWWd5ZRgz6tMsZmnFFbaPBkHnscEfTpQR2LxtV4Z1","https://ipfs.moralis.io:2053/ipfs/QmVXsWWWd5ZRgz6tMsZmnFFbaPBkHnscEfTpQR2LxtV4Z1"]
var jsons=[]
const addressContract = ""
const royalties = ""
var prices = [0.5,0.6]
var u =0;
listUri.forEach(element => {
  fetch(element)
  .then(response => response.json())
  .then(data => {
  	// Do something with your data
      data['price'] = prices[u];
      u++;
  	jsons.push(data);
  })
});
const k =(<div></div>)

export{jsons}