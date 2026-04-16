import React from 'react'
import Button from '../components/Button'
import heroImg from '../assets/images/ankur-sir-removebg-preview.png'
import { CircleDot } from 'lucide-react'
import CountUp from 'react-countup'
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import CarousalCard from '../components/CarousalCard'

const Home = () => {
    return (
        <>
            {/* // hero section */}
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
                    <div id="right-hero-sec" className='flex-1 min-h-100 md:min-h-full flex items-center justify-center'>

                        <img
                            src={heroImg}
                            alt="An CEO image"
                            className=' border border-gray-500 rounded-xl h-auto object-contain lg:w-3/4' />

                    </div>


                </div>

            </section>

            {/* // count section */}

            <section
                className=''
            >

                <div id='sharp-div'
                    className='flex flex-col gap-6 items-center text-center border rounded-xl justify-evenly py-6 md:flex-row'
                >

                    <div>
                        <h2 className='text-5xl md:text-6xl text-[#6C1BD9] font-semibold'> <CountUp start={0} end={27} duration={10} /> </h2>
                        <p className='text-gray-600'>Students cracked GSoC 2025</p>
                    </div>

                    <div>
                        <h2 className='text-5xl md:text-6xl  text-[#6C1BD9] font-semibold'><CountUp start={1000} end={150000} duration={9} /> </h2>
                        <p className='text-gray-600'>Total stipend earned by our students</p>
                    </div>

                    <div>
                        <h2 className='text-5xl md:text-6xl  text-[#6C1BD9] font-semibold'><CountUp start={0} end={200} duration={10} /> </h2>
                        <p className='text-gray-600'>High paying internships confirmed</p>
                    </div>

                </div>

                <div className='text-center my-4 gap-2 md:flex md:text-left'>

                    <div className='border border-red-600 px-4 py-2 rounded-xl'>
                        <h2 className='text-3xl my-4 md:text-4xl text-[#6C1BD9] font-semibold'>Job ready skills that matter</h2>
                        <p className='my-4 text-gray-600'>Master development through real-world applications, not tutorials</p>
                        <Button className='px-4 py-2 mx-2 my-1 bg-[#00AB93] text-white rounded-xl' name='Full Stack Development' />
                        <Button className='px-4 py-2 mx-2 my-1 bg-[#00AB93] text-white rounded-xl' name='Real-World Projects' />
                        <Button className='px-4 py-2 mx-2 my-1 bg-[#00AB93] text-white rounded-xl' name='Job Ready Portfolio' />
                        <Button className='px-4 py-2 mx-2 my-1 bg-[#00AB93] text-white rounded-xl' name='Open Source Contributions' />
                        <Button className='px-4 py-2 mx-2 my-1 bg-[#00AB93] text-white rounded-xl' name='DevOps & Deployment' />
                        <Button className='px-4 py-2 mx-2 my-1 bg-[#00AB93] text-white rounded-xl' name='Production Ready' />
                    </div>

                    <div className='border rounded-xl py-2 px-2 my-4 md:my-0 md:px-4 md:py-4'>
                        <h2 className='text-3xl my-4 md:text-4xl text-[#6C1BD9] font-semibold'>Personally mentoring India's next 100x engineers</h2>
                        <p className='text-gray-600 md:mb-10'>Taking you from 1x to 100x through practical projects and real-world open source</p>
                    </div>

                </div>

            </section>

            <section className='border my-4 py-4 rounded-xl'>
                <h2 className=' capitalize my-4 text-4xl text-[#6C1BD9] font-semibold text-center mb-6 md:text-5xl'>why luna coding institute ? </h2>

                <p className='text-gray-500 text-center my-4 text-base md:text-lg'>Our most comprehensive and impactful learning experiences</p>


                {/* swiper slider  */}
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    className='h-60'
                >
                    <SwiperSlide className='border border-gray-500 rounded-xl'>

                        <CarousalCard
                            heading='Real Engineer, Real Experience'
                            content='Learn from Harkirat Singh who has built & scaled real-world systems at top tech companies.' />

                    </SwiperSlide>

                    <SwiperSlide className='border border-gray-500 rounded-xl'>

                        <CarousalCard
                            heading='Learn by Doing'
                            content='Hands-on projects, open-source contributions & practical coding. Build payment systems, automation tools & end-to-end applications.' />

                    </SwiperSlide>
                    <SwiperSlide className='border border-gray-500 rounded-xl'>

                        <CarousalCard
                            heading='Job-Ready Curriculum'
                            content='Master DSA, System Design, DevOps & scalable full-stack skills. From JavaScript to MERN stack & blockchain technologies.' />

                    </SwiperSlide>
                    <SwiperSlide className='border border-gray-500 rounded-xl'>

                        <CarousalCard
                            heading='Career Support & Community'
                            content='Personalized career guidance, mock interviews, access to top hiring partners & a supportive community of ambitious learners.' />

                    </SwiperSlide>
                    <SwiperSlide className='border border-gray-500 rounded-xl'>

                        <CarousalCard
                            heading='Lifetime Access'
                            content='Lifetime access to course assignments & one-year access to session recordings for continuous learning at your pace.' />

                    </SwiperSlide>
                </Swiper >
            </section>

        </>
    )
}

export default Home