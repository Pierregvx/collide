import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import json2 from'../components/listjson'
import {upload} from "../functions/functions";
import React from 'react';
import Popup from 'reactjs-popup';

console.log(json2)
function oneblock(json){
  const u = <div><div className='containerImg' >
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



</div></div>
  // 
    return(
      <a className='itemdescription' >
        <Popup  trigger={u}
      position="bottom">
      <p className='fulldescription'><h5>description</h5>
   <p>{json["description"]}</p>
   <a  className="meta2 " id="submit"  onClick={()=>upload(json['ipfs'],json['price'])}>Mint for {json["price"]} eth</a>
   </p> 
   </Popup></a>
      
        
      
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