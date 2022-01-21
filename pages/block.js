import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import{jsons} from'./components/nftProperties'

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
  jsons.forEach(element => {
    ret.push(oneblock(element))
  });
  console.log({ret})
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
  `}
    </style>
  </Head>
  <div className='elem'>
  {ret}
  </div>
    </div>
    
 
  )
}
export default block