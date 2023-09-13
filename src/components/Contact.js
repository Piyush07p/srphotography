import React from 'react'
import '../css/contact.scss'
import {BsInstagram,BsFacebook, BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <>
      <section className='contact_sec'>
               <div className="contact_div">
                <div>
                     <h1>Contact Us</h1>
                     <div>
                        <h3>Address</h3>
                        <p>Near Tehsil, Bichi road, Churhat, District-Sidhi (M.P.)-486771</p>
                        <h3>Contact No.</h3>
                        <p>+91 9098171233</p>
                        <p>+91 9589703194</p>

                        <h3>Email Id</h3>
                        <p>srphotography0000@gmail.com</p>

                        <div className="follow">
                          <h2>Follow us</h2>
                              <a target='_blank' href="https://instagram.com/sr__photography1086?igshid=MzRlODBiNWFlZA==" ><BsInstagram/></a>
                              <a target='_blank' href=""><BsFacebook/></a>
                              <a target='_blank' href="https://wa.me/+919098171233"><BsWhatsapp/></a>

                        </div>
                     </div>
                </div>
               <form action="https://formspree.io/f/mwkdqpaq" method="POST">
                        <label htmlFor="">Your name</label><br />
                        <input  placeholder='enter name' name='name' type="text" />
                        <br />
                        <label htmlFor="">Your email</label><br />
                        <input placeholder='enter email' required name='email' type="text" />
                        <br />
                        <label htmlFor="">Your phone</label><br />
                        <input required placeholder='enter phone' name='phone' type="text" />
                        <br />
                        <label htmlFor="">Message</label><br />
                       <textarea  name='msg'  placeholder='enter message'  id="" cols="30" rows="10"></textarea>
                        <br />
                        <button>submit</button>

                </form>
               </div>
        
      </section>
    </>
  )
}

export default Contact