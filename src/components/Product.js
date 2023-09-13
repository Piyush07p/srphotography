import React, { useRef, useState } from 'react'
import '../css/Product.scss'
const Product = () => {
const quantt = useRef("")
const priceRef = useRef("")

const [quantVal, setqunatVal] = useState(1)
const [quantPrice, setqunatPrice] = useState(49)

const popUp = useRef("")
const showPopup=(e)=>{
       if(quantVal>0){
        if(e) popUp.current.style.top="2rem" ;
       }
       if(!e) popUp.current.style.top="-10rem"
}
const Counter=(e)=>{
   if(e){
    setqunatVal(quantVal+1)
    setqunatPrice(quantPrice+49)
   }
   if(!e){
     if(quantPrice>0){
        setqunatVal(quantVal-1)
        setqunatPrice(quantPrice-49)
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
                          <img src={require('./images/keychain.jpeg')} alt="" />
                    </div>
                    <div className='prod_desc'>
                         <h1>Prodcut name</h1>
                         <p>
                                hjsrbfjkANE aejsfnlasnefoj a;oesf
                                 oaijfe oiajefnaoief noiaje fiojae
                         </p>
                         <h3>Rs. <h3 ref={priceRef}> {quantPrice}</h3></h3>
                         <div className='quant_detail'>
                            <span onClick={()=>Counter(false)}>-</span>
                            <span ref={quantt}>{quantVal}</span>
                            <span onClick={()=>Counter(true)}>+</span>
                         </div>

                         <div className='buy_detail'>
                            <label  required htmlFor="">Enter mobile no.</label><br />
                            <input name='name' placeholder='enter name' type="text" /> <br />
                            <label required htmlFor="">Enter email</label><br />
                            <input name='email'  placeholder='enter email' type="text" /><br />
                            <label required htmlFor="">Enter Address</label><br />
                            <input name='address'  placeholder='enter address' type="text" />
                         </div>

                         <button
                         onClick={()=>showPopup(true)}>Buy</button>

                    </div>
                </div>
       </section>
  )
}

export default Product