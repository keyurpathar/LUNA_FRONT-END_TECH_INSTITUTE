import React from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className='px-3 py-2 md:px-8 font-lato'>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>

    </div>
  )
}

export default App
