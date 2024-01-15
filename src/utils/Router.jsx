import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from '../pages/Home'
import Logement from '../pages/Logement'
import Error from '../pages/Error'
import About from '../pages/About'

import '../styles/main.scss'

function Router() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Logement" element={<Logement />} />
          <Route path="/About" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.StrictMode>
  )
}

export default Router
