import React from 'react'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import Member from './components/Member'
import NotFound from './components/NotFound'
import Gallery from './components/Gallery'
import AboutDev from './components/AboutDev'
import Contact from './components/Contact'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
const App = () => {
  const [login, setLogin] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        {/* home */}
        <Route 
          path="/" 
          element={login ? 
            <>
              <Navbar /> 
              <Home />
            </> 
            : <Navigate to="/login" />} 
        />
        {/* login */}
        <Route 
          path="/login" 
          element={<Login setLogin={setLogin} />} 
        />
        {/* gallery */}
        <Route 
          path="/gallery" 
          element={
            <>
              <Navbar /> 
              <Gallery />
            </> 
    } 
        />

        {/* member */}
        <Route path="/member" element={
          <>
          <Navbar />
          <Member />
          </>} />
        {/* about developer */}
        <Route path="/about-developer" element={
          <>
          <Navbar />
          <AboutDev />
          </>} />
        {/* contact */}
        <Route path="/contact" element={
          <>
          <Navbar />
          <Contact />
          </>} />
        {/* plantation */}


        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App