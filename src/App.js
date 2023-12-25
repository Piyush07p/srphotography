import React from 'react'
import Header from './components/header.js'
import Home from './components/home.js'
import Services from './components/Services.js'
import About from './components/About.js'
import Contact from './components/Contact.js'
import Gallery from './components/Gallery.js'
import Booking from './components/Booking.js'
import Product from './components/Product.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/footer.js'
import './App.css'

import { useRef ,useState,useEffect} from 'react'
const App = () => {
const [mousePosition,setMousePosition]=useState({x:0,y:0})
let moveDot1=useRef('')
let moveDot2=useRef('')

function updateMousePos(e){
  setMousePosition({x:e.clientX,y:e.clientY})
  // moveDot1.current.style.left=mousePosition.x+"px"
  // moveDot1.current.style.top=mousePosition.y+"px"
  moveDot2.current.style.left=mousePosition.x+"px"
  moveDot2.current.style.top=mousePosition.y+"px"
}
useEffect((e)=>{
  window.addEventListener("mousemove",updateMousePos)
  return ()=>{
    document.removeEventListener("mousemove",updateMousePos)
  }
},[mousePosition])
  return (
    <>
      <Header/>
       <h1 ref={moveDot1}  className='movingDot1'></h1>
       <p ref={moveDot2} className='movingDot2'></p>
          <Routes>

            <Route  path={'/'} element={<Home/>}/>
            <Route  path={'/Services'} element={<Services/>}/>
            <Route  path={'/Gallery'} element={<Gallery/>}/>
            <Route  path={'/Gallery'} element={<Gallery/>}/>
            {/* <Route  path={'/About'} element={<About/>}/> */}
            <Route  path={'/Contact'} element={<Contact/>}/>
            <Route  path={'/Booking'} element={<Booking/>}/>
            <Route  path={'/Product'} element={<Product/>}/>

          </Routes>
        
      <Footer/>
   
    </>
  )
}

export default App
