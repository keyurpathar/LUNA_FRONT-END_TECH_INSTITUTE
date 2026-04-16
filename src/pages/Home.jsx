import React from 'react'
import Button from '../components/Button'
import heroImg from '../assets/images/ankur-sir-removebg-preview.png'
import { CircleDot } from 'lucide-react'

const Home = () => {
    return (

        // hero section 
        <section className='my-4'>

            <div id="hero-sec"
                className='min-h-[85vh] flex flex-col gap-2 md:flex-row md:justify-between md:items-center'
            >

                {/* left hero section  */}
                <div id="left-hero-sec" className='flex-1 flex items-center justify-center text-center flex-col gap-4 md:text-left md:items-start'>

                    <p className='flex text-gray-700 items-center capitalize gap-2 border border-gray-500 border-dashed rounded-xl px-2 py-1 md:py-2 md:text-lg'>
                        <CircleDot className='text-blue-700' /> join 10,000+ enrolled students today
                    </p>

                    <h2 className='text-4xl text-[#6C1BD9] font-semibold md:text-7xl md:font-bold'>
                        Master Full stack development
                    </h2>

                    <p className='text-sm leading-5 text-gray-700 md:text-base'>
                        Master Full Stack Development through hands-on open source projects. Join a community of developers transforming their careers with practical, real-world programming skills.
                    </p>

                    <div id="left-hero-btn" className='flex gap-4'>
                        <Button className='px-4 py-1 rounded-xl bg-[#4F39F6] text-white text-base active:scale-95 transition-all duration-300 md:px-4 md:py-4 md:text-xl cursor-pointer md:hover:bg-[rgb(79,57,249,0.8)]  hover:border-0' name='Learn More' />
                        <Button className='px-4 py-1 rounded-xl bg-[#4F39F6] text-white text-base active:scale-95 transition-all duration-300 md:px-4 md:py-4 md:text-xl cursor-pointer md:hover:bg-[rgb(79,57,249,0.8)]  hover:border-0' name='Explore Courses' />
                    </div>

                </div>

                {/* right hero section  */}
                <div id="right-hero-sec" className='flex-1 min-h-[400px] md:min-h-full flex items-center justify-center'>

                    <img
                        src={heroImg}
                        alt="An CEO image"
                        className=' border border-gray-500 rounded-xl h-auto object-contain lg:w-3/4' />

                </div>


            </div>

        </section>
    )
}

export default Home