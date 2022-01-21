import Head from 'next/head'

import Script from 'next/script'
import styles from '../styles/Home.module.css'
import Block from './block'
import { useWeb3React } from "@web3-react/core";
import {login} from "../functions/functions";



 
  
  
function myData(Data)
{
  console.log("tst",Data[0]);
}
// loadJSON method to open the JSON file.



export default function Home() {
  



  return (
    <div>
      <Head> 
    <style>{`
    .elem{
      display:flex;
      items-align:center;
    }
    .itemdescription{
    border-radius: 20px;
    border:2px solid black;
    
    margin : 10px 10px 10px 10px;
    width :210px;
    
    }
  .images{
    object-fit: cover;
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    border-radius: 20px;
    margin-top : 3px;
    margin-inline: 3px;
  
  }
  .containerImg{
  
    border-radius : 10px;
    height : 200px;
  width :200px;
  
  
  }
  .description {
    
    display: block; 
    
    width:60%;
  }
  .info{
   
    display : flex;
    margin : 10px 10px 10px 10px;
  }
  
  .price{
    width:40%;
    flex: 1 0 0%;
    align-items: flex-end;
    flex-direction: column;
    display: flex;
    
  }
  .sp{
    font-weight: 400;
    font-size: 12px;
    color: rgb(112, 122, 131);
  }
  #ethImg{
    width:10px;
    vertical-align: middle;
    margin-left:5px;
  
  
  }
  
    
      .title{
        text-align:center;
        padding:10px;
        
      }
    
  `}
    </style>
    </Head>
    <div>
      <h1 className='title'>Mint your Collide Item</h1>
      <a className="sbouton bouton " id="submit"  onClick={login}>Connect MetaMask </a>
      <div>
      <Block/>
      </div>
      
    </div>
    
    <Script src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js"></Script>

    <Script src="https://unpkg.com/moralis/dist/moralis.js"></Script></div>
    
  )
}

