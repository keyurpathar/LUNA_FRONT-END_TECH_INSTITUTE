import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import { IndianRupee } from 'lucide-react'

const CourseCard = ({id , img , heading , dets , price , discount }) => {
    return (
        <Link to={`/course/${id}`} className='block bg-white px-3 py-3 border-2 border-gray-500 rounded-xl md:px-5 md:py-5 w-full hover:shadow-xl transition-shadow'>

            <div>
                <img
                    src={img}
                    alt=""
                    className='rounded-xl w-full h-auto object-cover'
                />
            </div>

            <div className='my-4 flex flex-col gap-3'>

                <h3
                    className='text-2xl font-semibold text-[#6C1BD9] md:text-4xl'
                >
                    {heading}
                </h3>

                <p
                    className='text-sm text-gray-600 md:text-base'
                >
                    {dets}
                </p>

                <div className='flex items-center justify-between gap-4'>
                    <p className='flex items-center text-xl font-black text-[#4F39F6] md:text-3xl'><IndianRupee />{price}</p>
                    <p className='bg-green-300 text-green-800 font-semibold px-2 py-1 rounded-2xl text-sm md:text-base'>{discount}</p>
                </div>

                <Button name='Enroll Now' className='bg-[#4F39F6] text-white active:bg-[#6C1BD9] active:scale-95 transition-all duration-200  rounded-lg py-2 md:text-xl' />
            </div>
        </Link>
    )
}

export default CourseCard
