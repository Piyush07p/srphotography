import React, { useState } from 'react'
import '../css/services.scss'
import serviceData from '../Api/service-data'
const Services = () => {

  const [serData, setserData] = useState(serviceData)
  return (
    <>
        <section className='service_sec'>
            <h1>Our services</h1>
            <div className='services_div'>
                {
                  serviceData.map((e)=>{
                    return(
                      <>
                         <div className='service_card'>
                             <h3>{e.name}</h3>
                             <img src={e.link} alt='img' />
                            <button>Book</button>
                         </div>
                      </>
                    )
                  })
                }
            </div>
        </section>
    </>
  )
}

export default Services