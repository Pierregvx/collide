import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Block from './block'




 
  
  
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
    
      .title{
        text-align:center;
        padding:10px;
        
      }
    
  `}
    </style>
    </Head>
    <div>
      <h1 className='title'>Mint your Collide Item</h1>
      
      <div>
      <Block/>
      </div>
      
    </div>
    </div>
    
    
  )
}

