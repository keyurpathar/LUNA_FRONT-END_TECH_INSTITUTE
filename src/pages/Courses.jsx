import React from 'react'
import sir from '../assets/images/ankur-sir-removebg-preview.png'
import group from '../assets/images/community-bg.png'
import CourseCard from '../components/CourseCard'

const Courses = () => {
    return (

        <>
            {/* mentor section  */}
            <div className=' my-6 px-2 py-8 border rounded-xl'>

                <div className='flex gap-2 items-center justify-center'>

                    <img
                        src={sir}
                        alt="an CEO image"
                        className='w-10 rounded-4xl bg-gray-400'
                    />
                    <p className='text-base font-thin'>Mentored by Ankur lathiya</p>
                </div>

                <h1
                    className='text-3xl font-bold text-center my-4 text-[#6C1BD9] md:text-5xl'
                >
                    Choose Your Learning Path</h1>

                <p className='text-center text-base text-gray-800 md:text-lg md:px-22'>Master real engineering skills with hands-on mentorship. From full-stack development to DevOps — get job-ready with structured, industry-focused programs.
                </p>

            </div>

            {/* courses section  */}
            <section className='border my-4 border-b-gray-500 p-4 md:p-6 rounded-xl bg-[#783fc2]'>

                <div className='grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>

                    <CourseCard
                        img={'https://ik.imagekit.io/sheryians/courses/cohort3thumbnai_E9AGbX-rJ.webp'}
                        heading='Cohort 3.0'
                        dets='Build real scalable products used by thousands of users, learn AI engineering, full stack development, DevOps, system design, and startup building all inside one live Hindi cohort.'
                        price='8,999'
                        discount='20% off'
                    />

                    <CourseCard
                        img={'https://ik.imagekit.io/sheryians/Cohort%202.0/cohort-3_ekZjBiRzc-2_76HU4-Mz5z.jpeg?updatedAt=1757741949621'}
                        heading='Cohort 2.0'
                        dets='Build real scalable products used by thousands of users, learn AI engineering, full stack development, DevOps, system design, and startup building all inside one live Hindi cohort.'
                        price='7,999'
                        discount='43% off'
                    />

                    <CourseCard
                        img={'https://ik.imagekit.io/sheryians/courses_gif/undefined-Image_2_QUZ-yb_0T.jpeg'}
                        heading='Data Science &  GenAI'
                        dets='Build real scalable products used by thousands of users,learn AI engineering, full stack development, DevOps, DevOps, system design, and startup building all inside one live Hindi cohort.'
                        price='6,999'
                        discount='40% off'
                    />

                    <CourseCard
                        img={'https://ik.imagekit.io/sheryians/courses_gif/Front-End_Domination__Create_Anything_with_Code-FRONTENDTHUBNAIL_Wf8WqcNJx.jpg'}
                        heading='Frontend Domination'
                        dets='Build real scalable products used by thousands of users, learn AI engineering, full stack development, DevOps, system design, and startup building all inside one live Hindi cohort.'
                        price='3,899'
                        discount='30% off'
                    />

                    <CourseCard
                        img={'https://ik.imagekit.io/sheryians/courses_gif/undefined-maxresdefault_5-AHh9_1Y.jpg'}
                        heading='ThreeJS Domination'
                        dets='Build real scalable products used by thousands of users, learn AI engineering, full stack development, DevOps, system design, and startup building all inside one live Hindi cohort.'
                        price='2,118'
                        discount='56% off'
                    />

                    <CourseCard
                        img={'https://ik.imagekit.io/sheryians/courses_gif/undefined-javaas_Large_jY0Wighav__6PygWBZQ.jpeg'}
                        heading='Java Full Stack Dev'
                        dets='Build real scalable products used by thousands of users, learn AI engineering, full stack development, DevOps, system design, and startup building all inside one live Hindi cohort.'
                        price='4,236'
                        discount='33% off'
                    />

                    <CourseCard
                        img={'https://ik.imagekit.io/sheryians/courses_gif/undefined-apti_reasoning_45vyAnZ4y.jpeg'}
                        heading='Aptitude & Reasoning for Campus Placements'
                        dets='Build real scalable products used by thousands of users, learn AI engineering, full stack development, DevOps, system design, and startup building all inside one live Hindi cohort.'
                        price='932'
                        discount='10% off'
                    />

                    <CourseCard
                        img={'https://ik.imagekit.io/sheryians/courses_gif/undefined-IMG_5100_7vO7pODI9.JPG'}
                        heading='Job Ready AI Powered Cohort: Web + DSA'
                        dets='Build real scalable products used by thousands of users, learn AI engineering, full stack development, DevOps, system design, and startup building all inside one live Hindi cohort.'
                        price='5,999'
                        discount='40% off'
                    />

                    <CourseCard
                        img={'https://ik.imagekit.io/sheryians/courses_gif/undefined-web-dsa-thumb-10_ZKtPNgmW_.webp_Zhu2w1to5h.jpeg'}
                        heading='DSA domination & Aptitude Reasoning Course'
                        dets='Build real scalable products used by thousands of users, learn AI engineering, full stack development, DevOps, system design, and startup building all inside one live Hindi cohort.'
                        price='6,600'
                        discount='12% off'
                    />

                </div>
            </section>

            {/* community section  */}
            <section className='border rounded px-2 py-4 text-center md:flex md:justify-evenly md:items-center gap-6'>

                <div>


                    <h2 className='text-2xl font-bold text-[#4F39F6] md:text-4xl'>Our Community</h2>

                    <p className='text-gray-700 px-4 text-base md:text-lg my-4'>Join our vibrant community of learners and mentors. Connect, collaborate, and grow together as you embark on your learning journey with us.</p>

                </div>

                <img
                    src={group}
                    alt="Community"
                    className='rounded-xl md:w-3/5'
                />

            </section>

        </>
    )
}

export default Courses
