import React from 'react'
import Header from './components/header.js'
import Home from './components/home.js'
import Services from './components/Services.js'
import About from './components/About.js'
import Contact from './components/Contact.js'
import Gallery from './components/Gallery.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <>
      <Header/>
   
          <Routes>

            <Route  path={'/'} element={<Home/>}/>
            <Route  path={'/Services'} element={<Services/>}/>
            <Route  path={'/Gallery'} element={<Gallery/>}/>
            <Route  path={'/Gallery'} element={<Gallery/>}/>
            <Route  path={'/About'} element={<About/>}/>
            <Route  path={'/Contact'} element={<Contact/>}/>

          </Routes>
    
    </>
  )
}

export default App
