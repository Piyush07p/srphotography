import React from 'react'
import '../css/footer.scss'
import {BsInstagram,BsFacebook, BsWhatsapp} from 'react-icons/bs'

const Footer = () => {
  return (
    <section className='footer_sec'>
        <div className='cright'>
          <p>Sr Photography &copy; 2023, All rights reserved</p>
        </div>
        <div className='follow_foot'>
              <h2>Follow us </h2>
              <a target='_blank' href="https://instagram.com/sr__photography1086?igshid=MzRlODBiNWFlZA==" ><BsInstagram/></a>
              <a target='_blank' href=""><BsFacebook/></a>
              <a target='_blank' href="https://wa.me/+919098171233"><BsWhatsapp/></a>

        </div>
    </section>
  )
}

export default Footer