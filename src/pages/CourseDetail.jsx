import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { courses } from '../data/courses';
import Button from '../components/Button';
import { IndianRupee, ArrowLeft } from 'lucide-react';

const CourseDetail = () => {
    const { id } = useParams();
    const course = courses.find((c) => c.id === id);
    // console.log(course)

    if (!course) {
        return (
            <div className="min-h-[50vh] flex flex-col items-center justify-center gap-4">
                <h1 className="text-3xl font-bold text-red-500">Course Not Found</h1>
                <Link to="/course" className="text-[#4F39F6] underline">Back to Courses</Link>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto my-8 p-4 md:p-8 bg-white border-2 border-gray-200 rounded-2xl ">
            <Link to="/course" className="inline-flex items-center gap-2 text-[#4F39F6] hover:underline mb-6 font-semibold">
                <ArrowLeft size={20} /> Back to Courses
            </Link>

            <div className="flex justify-center items-center flex-col gap-8">
                <div className="w-full md:w-3/4">
                    <img
                        src={course.img}
                        alt={course.heading}
                        className="w-full h-auto rounded-xl object-cover shadow-sm"
                    />
                </div>

                <div className="w-full md:w-3/4 flex flex-col justify-between">
                    <div>
                        <h1 className="text-3xl md:text-5xl font-bold text-[#6C1BD9] mb-4">
                            {course.heading}
                        </h1>
                        {/* <p className="text-base text-gray-700 leading-relaxed mb-6 md:text-lg">
                            {course.dets}
                        </p> */}
                        <p className='text-base text-gray-700 leading-relaxed mb-6 md:text-lg'>
                            {course.fulldets}
                        </p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                            {/* <span className="text-gray-500 font-medium">Price</span> */}
                            <div className="flex justify-between w-full  items-center gap-2">

                                <p className="flex items-center text-3xl font-black text-[#4F39F6]">
                                    <IndianRupee size={26} />{course.price}
                                </p>
                                <p className="bg-green-300 text-green-800 font-bold px-3 py-1 rounded-full text-sm">
                                    {course.discount}
                                </p>
                            </div>
                        </div>

                        <Button
                            name='Enroll Now'
                            className='w-full bg-[#4F39F6] text-white hover:bg-[#6C1BD9] active:scale-95 transition-all duration-200 rounded-lg py-3 text-lg md:text-xl font-bold shadow-md'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetail;
