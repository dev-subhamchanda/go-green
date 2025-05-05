import React from 'react'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import Member from './components/Member'
import NotFound from './components/NotFound'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
const App = () => {
  const [login, setLogin] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={login ? 
            <>
              <Navbar /> 
              <Home />
            </> 
            : <Navigate to="/login" />} 
        />
        <Route 
          path="/login" 
          element={<Login setLogin={setLogin} />} 
        />
        <Route path="/member" element={
          <>
          <Navbar />
          <Member />
          </>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App