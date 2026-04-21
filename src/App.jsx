import Header from './components/Header'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Courses from './pages/Courses'
import ScrollToTop from './components/ScrollToTop'
import CourseDetail from './pages/CourseDetail'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import SignUp from './pages/signUp'
import { ReactLenis } from 'lenis/react'
// import Dashboard from './pages/admin/Dashboard'
import { useLocation } from "react-router-dom";
// import CourseAdmin from './pages/admin/CourseAdmin'

const App = () => {


  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");

  return (
    <ReactLenis root options={{ lerp: 0.05, wheelMultiplier: 1, smoothTouch: true }}>
      <div className='px-3 py-2 md:px-8 font-lato'>
        {!isAdmin && <Header />}

        <ScrollToTop />

        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/course' element={<Courses />} />
          <Route path='/course/:id' element={<CourseDetail />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />



        </Routes>

        {!isAdmin && <Footer />}

        {/*        <Routes>

          admin routes 

          <Route path='/admin' element={<Dashboard />} />
           <Route path='/admin/course' element={<CourseAdmin />} />

        </Routes> */}



      </div>
    </ReactLenis>
  )
}

export default App
