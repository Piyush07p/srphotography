import React, { useState } from 'react'
import bookData from '../Api/bookApi'
import '../css/Booking.scss'
import { NavLink } from 'react-router-dom'
const Booking = () => {

  const [bookDatas, setbookDatas] = useState(bookData)
  return (
    <>
        <section className='Book_sec'>
              <h1>Book Now</h1>
              <>
                {
                  bookDatas.map((e)=>{
                    return(
                         <>
                            <div className='bookDetail'>
                              <h2>{e.head}</h2>
                              <div>
                                <h4>{e.para}</h4>
                                 <NavLink to="/Contact">
                                   <button>Contact</button>
                                 </NavLink>
                              </div>
                            </div>
                         </>
                    )
                  })
                }
             </>

        </section>
    </>
  )
}

export default Booking