import React, { useState } from 'react'
import logo from '../assets/images/logo.jpg'
import { Link } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import Button from './Button';


const Header = () => {

    const [open, setOpen] = useState(false)


    return (
        <header>

            <div className='flex justify-between items-center'>


                {/* logo   */}
                <div className='border w-fit rounded-lg'>

                    <Link>
                        <img
                            src={logo}
                            alt=""
                            className='w-16 rounded-lg'
                        />
                    </Link>

                </div>

                {/* desktop menu  */}
                {/* links  */}
                <nav className='flex gap-4 hidden  md:flex'>
                    <Link className='px-4 py-1 border border-gray-400 text-center my-1 rounded hover:bg-purple-500 hover:text-white'>Home</Link>
                    <Link className='px-4 py-1 border border-gray-400 text-center my-1 rounded hover:bg-purple-500 hover:text-white'>Store</Link>
                    <Link className='px-4 py-1 border border-gray-400 text-center my-1 rounded hover:bg-purple-500 hover:text-white'>Course</Link>
                </nav>

                {/* buttons  */}

                <div className='flex gap-4 hidden md:block'>

                    <Button
                        name={'Sign Up'}
                        className='px-4 py-2 mx-2 border rounded-lg text-center text-white  bg-blue-600 cursor-pointer active:bg-blue-500 active:scale-95 hover:bg-blue-500'
                    />
                    <Button name={'Login'}
                        className='px-4 py-2 mx-2 border rounded-lg text-center text-white  bg-blue-600 cursor-pointer active:bg-blue-500 active:scale-95 hover:bg-blue-500'
                    />

                </div>

                {/* hamburger  */}
                <div
                    className='bg-purple-600 px-1 py-1 w-fit rounded text-2xl md:hidden active:bg-purple-500'
                    onClick={() => setOpen(!open)}
                >
                    <RxHamburgerMenu />
                </div>
            </div>


            {/* mobile menu  */}
            {/* links & buttons  */}


            {
                open &&
                <>
                    <nav className='my-4 md:hidden'>
                        <Link className='block border text-center my-1 rounded'>Home</Link>
                        <Link className='block border text-center my-1 rounded'>Store</Link>
                        <Link className='block border text-center my-1 rounded'>Course</Link>
                    </nav>

                    <div className='md:hidden'>
                        <Button name={'Sign Up'} className='w-full py-1 border text-center my-1 rounded bg-blue-600 text-white active:bg-blue-500' />
                        <Button name={'Login'} className='w-full py-1 border text-center my-1 rounded bg-blue-600 text-white active:bg-blue-500' />
                    </div>
                </>
            }


        </header>
    )
}

export default Header
