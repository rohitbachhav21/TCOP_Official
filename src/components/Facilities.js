import React from 'react'
import Buses from "../images/Buses.jpg"
import OPD from "../images/OPD.jpeg"
import classroom from "../images/classroom.jpg"
import Library from "../images/Library.jpeg"
import Seminarhall from "../images/Seminarhall.jpeg"
import Hostel from "../images/Hostel.jpeg"

const page = () => {
    return (
        <div>
            <div>

                <div className='bg-blue-700 text-white text-4xl md:text-7xl flex justify-center items-center font-serif'>
                    Facilities
                </div>

                <div className='md:grid md:grid-cols-3 md:p-10'>

                    <div className='p-4'>
                        <div className='rounded-lg shadow-black shadow-lg'><img src={Buses} alt='kinesiotherapy' height={1000} width={1000}></img></div>
                        <div className='text-3xl font-serif text-center m-4'>Buses</div>
                    </div>

                    <div className='p-4'>
                        <div className='rounded-lg shadow-black shadow-lg'><img src={OPD} alt='kinesiotherapy' height={1000} width={1000}></img></div>
                        <div className='text-3xl font-serif text-center m-4'>OPD</div>
                    </div>

                    <div className='p-4'>
                        <div className='rounded-lg shadow-black shadow-lg'><img src={classroom} alt='kinesiotherapy' height={1000} width={1000}></img></div>
                        <div className='text-3xl font-serif text-center m-4'>Classroom</div>
                    </div>

                    <div className='p-4'>
                        <div className='rounded-lg shadow-black shadow-lg'><img src={Library} alt='kinesiotherapy' height={1000} width={1000}></img></div>
                        <div className='text-3xl font-serif text-center m-4'>Library</div>
                    </div>

                    <div className='p-4'>
                        <div className='rounded-lg shadow-black shadow-lg'><img src={Seminarhall} alt='kinesiotherapy' height={1000} width={1000}></img></div>
                        <div className='text-3xl font-serif text-center m-4'>Seminar Hall</div>
                    </div>

                    <div className='p-4'>
                        <div className='rounded-lg shadow-black shadow-lg'><img src={Hostel} alt='kinesiotherapy' height={1000} width={1000}></img></div>
                        <div className='text-3xl font-serif text-center m-4'>Hostel</div>
                    </div>



                </div>


            </div>
        </div>
    )
}

export default page
