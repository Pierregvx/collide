import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import{jsons} from'../components/nftProperties'

function oneblock(json){
  console.log(json);
  console.log(json['image']);
    return(
    
      
        <div className='itemdescription'>
            <div className='containerImg' >
              <img className='images'src={json["image"]} ></img>
            </div>
              <div className='info'>
              <div className='description'>
                
                {json["name"]}
              </div>
              <div className = "price">
                <div><span className = "sp">Price : <span color='black'>{json['price']}</span></span> 
                <img id='ethImg' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/628px-Ethereum_logo_2014.svg.png'></img>
                </div>
     
      </div>
      
      
      
            </div>
            </div>
      
          
            
        
      
      
            
      
      )
}

function block(){
  var ret = [];
  const json2 =[{name: 'CV Pierre Gu�veneux', description: 'my cv : https://devinci-my.sharepoint.com/personal…erre%5Fgueveneux%5Fedu%5Fdevinci%5Ffr%2FDocuments', image: 'https://ipfs.moralis.io:2053/ipfs/QmejiBzfq7AojVYk7fn1ZvzqMfs7cbmVH4oxkHf8CHhVsF', price: 0.6},{name: 'CV Pierre Gu�veneux', description: 'my cv : https://devinci-my.sharepoint.com/personal…erre%5Fgueveneux%5Fedu%5Fdevinci%5Ffr%2FDocuments', image: 'https://ipfs.moralis.io:2053/ipfs/QmejiBzfq7AojVYk7fn1ZvzqMfs7cbmVH4oxkHf8CHhVsF', price: 0.6}]
  console.log(jsons)
  json2.forEach(element => {
    ret.push(oneblock(element))
  });
  console.log({ret})
  return (
    <div>
      
  <div className='elem'>
  {ret}
  </div>
    </div>
    
 
  )
}
export default block