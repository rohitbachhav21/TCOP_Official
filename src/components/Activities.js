import React from 'react'
import womens from "../images/womens.jpg"
import WHD from "../images/WHD.jpg"
import mush from "../images/mush.jpg"

const page = () => {
    return (
        <div>

            <div>


                <div className='bg-blue-700 text-white text-4xl md:text-7xl flex justify-center items-center font-serif'>
                    Co-curricular Activities
                </div>

                <div className='p-4 md:p-12'>
                    <div className='p-4 md:flex'>
                        <div><img className='rounded-lg' src={womens} alt="womens" width={1000} height={1000} ></img></div>
                        <div className='text-justify pt-1  md:flex-col md:items-center md:justify-center md:p-10 md:text-center'>
                            <p className='font-serif text-4xl'>Women's Day</p>
                            <p className='text-color-400'>On this special day, Tanmayi College of Physiotherapy takes pride, In commemorating women's indomitable spirit and fierce stride. Empowering, inspiring, and transforming lives, they are the epitome of grace and pride.</p>
                        </div>
                    </div>

                    <br />
                    <hr />
                    <br />

                    <div className='p-4  hidden md:flex'>
                        <div className='text-justify pt-1  md:flex-col md:items-center md:justify-center md:p-10 md:text-center'>
                            <p className='font-serif text-4xl'>World Health Day</p>
                            <p className='text-color-400'>Celebrating World Health Day, Tanmayi College of Physiotherapy stands tall, Educating, advocating, and ensuring health for one and all. With knowledge and compassion, we heal, restore, and prevent the fall.</p>
                        </div>
                        <div><img className='rounded-lg' src={WHD} alt="womens" width={1000} height={1000} ></img></div>
                    </div>

                    <div className='p-4 md:hidden '>
                        <div><img className='rounded-lg' src={WHD} alt="womens" width={1000} height={1000} ></img></div>
                        <div className='text-justify pt-1  md:flex-col md:items-center md:justify-center md:p-10 md:text-center'>
                            <p className='font-serif text-4xl'>World Health Day</p>
                            <p className='text-color-400'>Celebrating World Health Day, Tanmayi College of Physiotherapy stands tall, Educating, advocating, and ensuring health for one and all. With knowledge and compassion, we heal, restore, and prevent the fall.</p>
                        </div>
                    </div>

                    <br />
                    <hr />
                    <br />

                    <div className='p-4 md:flex'>
                        <div><img className='rounded-lg' src={mush} alt="womens" width={1000} height={1000} ></img></div>
                        <div className='text-justify pt-1  md:flex-col md:items-center md:justify-center md:p-10 md:text-center'>
                            <p className='font-serif text-4xl'>MUHS Foundation Day 25th Silver Jubilee</p>
                            <p className='text-color-400'>With gratitude and excitement, we commemorate MUHS's Silver Jubilee, Tanmayi College of Physiotherapy cherishes the journey and camaraderie. Inspired by the past, we envision a future of progress and prosperity.</p>
                        </div>
                    </div>


                </div>


            </div>

        </div>
    )
}

export default page
