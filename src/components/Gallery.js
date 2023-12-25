import React, { useState } from 'react'
import '../css/Gallery.scss';
import galData from '../Api/gal_data';
const Gallery = () => {
  const [gData, setgData] = useState(galData)
  return (
      <>
         <section className='galSec'>
             <h1>Photo Gallery</h1>
                 <div className='upper_gal'>
                      <img width="100%" height="100%" src={require("./images/mat2.jpg")}/>
                 </div>
                 <div className='lower_gal'>
                  <div className='card_gal'>
                      {
                        gData.map((e)=>{
                          return(
                            <>
                              {
                                e.key<=5?
                                <img src={require(`${e.link}`)} alt="" />
                                :""
                              }
                            </>
                          )
                        })
                      }
                  </div>
                  <div className='card_gal'>
                      {
                        gData.map((e)=>{
                          return(
                            <>
                            {
                                e.key>5&&e.key<=11?
                                <img src={require(`${e.link}`)} alt="" />
                                :""
                              }
                            </>
                          )
                        })
                      }
                  </div>
                  <div className='card_gal'>
                      {
                        gData.map((e)=>{
                          return(
                            <>
                           {
                                e.key>11&&e.key<=17?
                                <img src={require(`${e.link}`)} alt="" />
                                :""
                              }
                            </>
                          )
                        })
                      }
                  </div>
                  <div className='card_gal'>
                      {
                        gData.map((e)=>{
                          return(
                            <>
                            {
                                e.key>17&&e.key<=23?
                                <img src={require(`${e.link}`)} alt="" />
                                :""
                              }
                            </>
                          )
                        })
                      }
                  </div>   

                 </div>
         </section>
      </>
  )
}

export default Gallery