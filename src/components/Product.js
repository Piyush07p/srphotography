import React, { useRef, useState } from 'react'
import { GraphyContext} from "../Context/ProdContext"
import {useContext} from "react";

import '../css/Product.scss'
const Product = () => {

const {prodname,setprodName,prodPrice,setprodPrice,prodImg,setprodImg}=useContext(GraphyContext);

const quantt = useRef("")
const priceRef = useRef("")

const [quantVal, setqunatVal] = useState(1)
const [quantPrice, setqunatPrice] = useState(prodPrice)

const popUp = useRef("")
const showPopup=(e)=>{
       if(quantVal>0){
        if(e) popUp.current.style.top="2rem" ;
       }
       if(!e) popUp.current.style.top="-10rem"
}
const Counter=(e)=>{
  console.log(prodImg)
   if(e){
    setqunatVal(quantVal+1)
    setqunatPrice(quantPrice+prodPrice)
   }
   if(!e){
     if(quantPrice>0){
        setqunatVal(quantVal-1)
        setqunatPrice(quantPrice-prodPrice)
     }

   }
}


  return (
       <section className='Product_sec'>
              <main>
                    <div ref={popUp}>
                        <h3>Product purchased successfully</h3>
                        <button  onClick={()=>showPopup(false)}>OK</button>
                    </div>
              </main>
                <div>
                    <div className='prod_img'>
                          <img src={require(`${prodImg}`)} alt="" />
                    </div>
                    <div className='prod_desc'>
                         <h1>{prodname}</h1>
                         <p>
                           Enter the detail below to get your product delivery on time
                         </p>
                         <h3>Rs. <h3 ref={priceRef}>{quantPrice}</h3></h3>
                         <div className='quant_detail'>
                            <span onClick={()=>Counter(false)}>-</span>
                            <span ref={quantt}>{quantVal}</span>
                            <span onClick={()=>Counter(true)}>+</span>
                         </div>

                         <div className='buy_detail'>
                           <form action='https://formspree.io/f/xnqkzjkp' method='POST'>
                           <input style={{display:"none"}} name="quantity" value={quantVal} /> <br/>
                           <input style={{display:"none"}} name="productname" value={prodname} /> <br/>
                            <label  required htmlFor="">Enter name</label><br />
                            <input name='name' required placeholder='your name' type="text" /> <br />
                            <label  required htmlFor="">Enter mobile no.</label><br />
                            <input name='phone' required placeholder='your phone' type="text" /> <br />
                            <label required htmlFor="">Enter email</label><br />
                            <input name='email'  placeholder='your email' type="text" /><br />
                            <label required htmlFor="">Enter Address</label><br />
                            <input name='address'  required placeholder='your address' type="text" />
                            <button onClick={()=>showPopup(true)}>Buy</button>

                           </form>
                         </div>

                        
                    </div>
                </div>
       </section>
  )
}

export default Product