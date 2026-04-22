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
import { useLocation } from "react-router-dom";
import AdminRegister from './pages/admin/AdminRegister'
import AdminLogin from './pages/admin/AdminLogin'
import Dashboard from './pages/admin/Dashboard'
import ProtectedAdminRoute from './pages/admin/ProtectedAdminRoute'
import ManageCourse from './pages/admin/ManageCourse'
import AdminLayout from './components/admin/AdminLayout'
import ManageContact from './pages/admin/ManageContact'

const App = () => {


  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");

  return (
    <ReactLenis root options={{ lerp: 0.05, wheelMultiplier: 1, smoothTouch: true }}>

      <div className='px-3 py-2 md:px-8 font-lato'>
        {!isAdmin && <Header />}

        <ScrollToTop />

        <Routes>

          {/* user routes  */}
          <Route path='/' element={<Home />} />
          <Route path='/course' element={<Courses />} />
          <Route path='/course/:id' element={<CourseDetail />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />

          {/* admin routes  */}
          <Route path='/admin' element={<AdminLogin />} />
          <Route path='/admin/register' element={<AdminRegister />} />

          {/* This route has no path! It just wraps the routes inside it with the Layout and Protection */}
          <Route element={
            <ProtectedAdminRoute>
              <AdminLayout />
            </ProtectedAdminRoute>
          }>
            {/* These will replace the <Outlet /> inside AdminLayout */}
            <Route path='/admin/dashboard' element={<Dashboard />} />
            <Route path='/admin/course' element={<ManageCourse />} />
            <Route path='/admin/contact' element={<ManageContact />} />
          </Route>

        </Routes>

        {!isAdmin && <Footer />}




      </div>
    </ReactLenis>
  )
}

export default App
