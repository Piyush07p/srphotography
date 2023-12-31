import React from 'react'
import '../css/contact.scss'
import {BsInstagram,BsFacebook, BsWhatsapp} from 'react-icons/bs'
import {FaLocationDot} from "react-icons/fa6"
import {BiLogoGmail,BiSolidPhone} from "react-icons/bi"
// import {SiGmail} from "react-icons/si"


const Contact = () => {
  return (
    <>
      <section className='contact_sec'>
               <div className="contact_div">
                <div>
                     <h1>Contact Us</h1>
                     <div>
                      <p>Whether you're interested in booking a photoshoot or just want to say hello, feel free to drop a message.</p>
                        <h3>Address</h3>
                        <p><FaLocationDot/> Near Tehsil, Bichi road, Churhat, District-Sidhi (M.P.)-486771</p>
                        <h3>Contact No.</h3>
                        <p><BiSolidPhone/> +91 9098171233</p>
                        <p><BiSolidPhone/> +91 9589703194</p>

                        <h3>Email Id</h3>
                        <p><BiLogoGmail/> srphotography0000@gmail.com</p>

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
                        <input placeholder='enter email' name='email' type="text" />
                        <br />
                        <label htmlFor="">Your phone</label><br />
                        <input required placeholder='enter phone' name='phone' type="text" />
                        <br />
                        <label htmlFor="">Message</label><br />
                       <textarea  name='msg'  placeholder='enter message'  id="" cols="30" rows="10"></textarea>
                        <br />
                        <button>Submit</button>

                </form>
               </div>
        
      </section>
    </>
  )
}

export default Contact