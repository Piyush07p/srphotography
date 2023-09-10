import React from 'react'
import '../css/contact.scss'

const Contact = () => {
  return (
    <>
      <section className='contact_sec'>
               <div className="contact_div">
               <form action="">
                        <label htmlFor="">Your name</label><br />
                        <input type="text" />
                        <br />
                        <label htmlFor="">Your email</label><br />
                        <input type="text" />
                        <br />
                        <label htmlFor="">Your phone</label><br />
                        <input type="text" />
                        <br />
                        <label htmlFor="">Message</label><br />
                       <textarea name="" id="" cols="30" rows="10"></textarea>
                        <br />

                </form>
               </div>
        
      </section>
    </>
  )
}

export default Contact