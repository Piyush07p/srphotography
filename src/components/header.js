import React, { useRef, useState } from 'react'
import '../css/header.scss'
import {NavLink} from "react-router-dom";
import {RxHamburgerMenu} from "react-icons/rx"
const Header = () => {
     const hamUl= useRef("")
     const hamB = useRef("")
     const [flag, setflag] = useState(true)
     const navbarVis=()=>{
         if({flag}) hamUl.current.style.display="flex";
         if(!flag)hamUl.current.style.display="none";
          setflag(!flag)
     
     }

  return (
       <>
            <nav className='nav_bar'>
                 <div className="logo">
                  LOGO
                 </div>
                 <ul ref={hamUl}>
                    <NavLink className='navlink'  to="/">Home</NavLink>
                    <NavLink className='navlink'  to="/Services">Services</NavLink>
                    <NavLink className='navlink'  to="/Gallery">Gallery</NavLink>
                    <NavLink className='navlink'  to="/About">About</NavLink>
                    <NavLink className='navlink'  to="/Contact">Contact</NavLink>
                  </ul>
                  <p ref={hamB} onClick={navbarVis} className='hamBur'>
                     <RxHamburgerMenu/>
                  </p>
            </nav>
       </>
  )
}

export default Header;