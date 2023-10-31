import React from 'react'
import classroom from "../images/classroom.jpg"
import girl from "../images/girl.jpg"
import womens from "../images/womens.jpg"
import AdjustOutlinedIcon from '@mui/icons-material/AdjustOutlined';

const page = () => {



    return (
        <div>
            <div>



                {/* <div id="default-carousel" className="relative w-full" data-carousel="slide">
    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={girl} width={500} height={500} alt="girl" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"></img>
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
        <img src={building} width={500} height={500} alt="building" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"></img>

        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
        <img src={sir} width={500} height={500} alt="sir" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"></img>

        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
        <img src={girl2} width={500} height={500} alt="girl2" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"></img>

        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
        <img src={classroomgirls} width={500} height={500} alt="classroomgirls" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"></img>

        </div>
    </div>
    <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>
    <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
        </span>
    </button>
</div> */}

                <div className='relative'>
                    <img src={girl} height={1000} width={1000} alt='girl' className='w-full h-auto' ></img>
                    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-left text-white'>
                        <h1 className='md:text-6xl md:font-bold text-2xl font-semibold m-2 font-serif'>
                            Tanmayi College of Physiotherapy
                        </h1>
                        <p className='hidden md:block m-2'>
                            This is where we empower students with the skills they need to transform themselves, promote wellness in others, and positively impact our global healthcare communities through the fields of physiotherapy and nursing
                        </p>
                        <button className='p-2 m-2 bg-white text-blue-900 font-serif text-1xl font-semibold outline-none rounded-lg border-none border-white'><a href="/contact">Contact us</a></button>
                    </div>
                </div>


                <div className='bg-white'>
                    <div className='w-2/3 m-auto '>
                        <div className='text-4xl md:ml-4 md:mt-10 font-serif'>
                            Learning Begins With Us
                        </div>
                        <div className='grid md:grid-cols-2'>
                            <div className='text-1xl text-justify mb-4 md:m-8 md:p-2 text-gray-600 font-semibold'>“Learning Begins with Us” is the guiding principle of our physiotherapy and nursing college. It reflects our unwavering commitment to fostering a dynamic and engaging learning environment for our students and faculty members in the fields of physiotherapy and nursing.</div>
                            <div className='text-1xl text-justify mb-4 md:m-8 md:p-2 text-gray-600 font-semibold'>At our college, we firmly believe that learning goes beyond textbooks and lectures. We recognize that true learning happens when students actively participate and take ownership of their education. “Learning Begins with Us” signifies that each individual within our college community, including students, faculty, and staff, has a valuable role to play in the learning process.</div>
                            <div className='text-1xl text-justify mb-4 md:m-8 md:p-2 text-gray-600 font-semibold'>By embracing this motto, we empower our students to become lifelong learners and skilled healthcare professionals. We encourage them to develop a deep understanding of the human body, master the latest techniques and technologies in physiotherapy and nursing, and cultivate a compassionate and patient-centered approach to care.</div>
                            <div className='text-1xl text-justify mb-4 md:m-8 md:p-2 text-gray-600 font-semibold'>Through a commitment to excellence in education, we equip our students with the knowledge, skills, and values needed to excel in their respective fields. By embracing the motto “Learning Begins with Us,” we foster a transformative learning environment that empowers students to make a positive impact on healthcare.</div>
                        </div>
                        <div>
                        </div>
                    </div>

                </div>


                <div className='bg-gray-100'>
                    <div className=' text-4xl italic  text-gray-500 font-serif m-6 md:p-28'>
                        “Empowering Compassionate Care: Transforming Lives Through Excellence in Physiotherapy and Nursing Education”
                    </div>
                </div>

                <div className='grid md:grid-cols-2  justify-center items-center m-5 md:m-10'>
                    <div className='text-4xl md:ml-4  font-serif'>
                        Curriculum Overview
                    </div>
                    {/* <hr className='bg-blue-900' /> */}
                    <div className='text-gray-600 font-semibold'>
                        The TCOP aims at offering all our students a broad and balanced curriculum that provides rewarding and stimulating activities to prepare them for the best social and cultural life.
                    </div>
                </div>

                <div className='flex items-center justify-center'>
                    <div className=' p-2 border border-x-slate-50 shadow-2xl rounded-sm'>
                        <div>
                            <img src={classroom} alt='classroom' width={1000} height={1000}></img>
                        </div>
                        <div className='flex items-center justify-center p-2 tex-6xl font-semibold font-serif'>B.P.T.H (Bachelor of Physiotherapy)</div>
                        <div className='p-4 flex items-center justify-center'>
                            <button className='p-2 rounded-ld outline-none border-none bg-green-300 text-black'><a href="/physiotherapy">View Details</a></button>
                        </div>
                    </div>

                </div>


                <div className='md:flex md:p-20'>
                    <div className='m-2 md:w-full'><img src={womens} alt='womens' width={600} height={600}></img></div>
                    <div className='p-2 m-4 border border-x-slate-50 shadow-2xl rounded-sm md:flex-col justify-center items-center'>
                        <div className='text-4xl font-serif '>
                            <h1>Our Co-curricular Activities</h1>
                        </div>
                        <div className='flex p-3'>
                            <div ><AdjustOutlinedIcon /></div>
                            <div className='ml-2 text-justify'>
                                <h1 className='font-serif text-2xl '>Women's Day</h1>
                                <p>On this special day, Tanmayi College of Physiotherapy takes pride, In commemorating women's indomitable spirit and fierce stride. Empowering, inspiring, and transforming lives, they are the epitome of grace and pride.</p>
                            </div>
                        </div>
                        <div className='flex p-3'>
                            <div ><AdjustOutlinedIcon /></div>
                            <div className='ml-2 text-justify'>
                                <h1 className='font-serif text-2xl '>World Helath Day</h1>
                                <p>Celebrating World Health Day, Tanmayi College of Physiotherapy stands tall, Educating, advocating, and ensuring health for one and all. With knowledge and compassion, we heal, restore, and prevent the fall.</p>
                            </div>
                        </div>
                        <div className='flex p-3'>
                            <div ><AdjustOutlinedIcon /></div>
                            <div className='ml-2 text-justify'>
                                <h1 className='font-serif text-2xl '>MUHS Foundation Day 25th Silver Jubilee</h1>
                                <p>With gratitude and excitement, we commemorate MUHS's Silver Jubilee, Tanmayi College of Physiotherapy cherishes the journey and camaraderie. Inspired by the past, we envision a future of progress and prosperity</p>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default page