import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import json2 from'../components/listjson'
import {upload} from "../functions/functions";
console.log(json2)
function oneblock(json){
  
    return(
    
      
        <a className='itemdescription' onClick={()=>upload(json['ipfs'])}>
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
            </a>
      
      )
}

function block(){
  var ret = [];
  
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