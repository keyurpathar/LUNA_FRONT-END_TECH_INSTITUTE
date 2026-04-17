import React from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Courses from './pages/Courses'
import ScrollToTop from './components/ScrollToTop'
import About from './pages/About'

const App = () => {
  return (
    <div className='px-3 py-2 md:px-8 font-lato'>
      <Header />

      <ScrollToTop />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course' element={<Courses />} />
        <Route path='/about' element={<About />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
