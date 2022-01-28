import Head from 'next/head'

import Script from 'next/script'
import styles from '../styles/Home.module.css'
import Block from './block'

import {login} from "../functions/functions";



 
  
const axios = require('axios');
 

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
    cursor: pointer;
    margin : 10px 10px 10px 10px;
    width :210px;
    
    }
  .images{
    object-fit: cover;
    width: 97%;
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
      .listeitem{
        width:70%;
      }
      .meta{
        background: #0d0ac7a1;
        padding: 7px 7px 7px 2px;
    border-radius: 3px;
    margin-left: 20px;
    text-align: center;
    align-items: center;
    cursor: pointer;
    
    font-size:20px;

      }
      .fulldescription{
  
        text-align:center;
        max-width: 300px;
        background:#eee;
        line-height: 1;
        padding: 7px 17px 7px 2px;
        max-width: 200px;
        border-radius: 15px;
        
      }
      .meta2{
        background: #c7ceea;
        padding: 4px 4px 4px 4px;
        color:white;
    border-radius: 3px;
    margin-left: 20px;
    text-align: center;
    align-items: center;
    cursor: pointer;
    max-width: 300px;
    overflow: hidden;
      }
  `}
    </style>
    </Head>
    <div>
      <h1 className='title'>Mint your Collide Item <br></br><a  className="meta " id="submit"  onClick={login}>Connect MetaMask </a></h1>
      
      <div className='listeitem'>
      <Block/>
      </div>
      
    </div>
    
    <Script src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js"></Script>

    <Script src="https://unpkg.com/moralis/dist/moralis.js"></Script></div>
    
  )
}

