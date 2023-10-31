import React from 'react'
import Kinesiotherapy from "../images/Kinesiotherapy.jpg"
import Electrotherapy from "../images/Electrotherapy.jpg"
import Yoga from "../images/Yoga.jpg"
import Skeletan from "../images/skeletan.jpg"

const page = () => {
    return (
        <div>
            <div>

                <div className='bg-blue-700 text-white text-4xl md:text-7xl flex justify-center items-center font-serif'>
                    Departments
                </div>

                <div className='md:grid md:grid-cols-2 md:p-10'>

                    <div className='p-4'>
                        <div className='rounded-lg shadow-black shadow-lg'><img src={Kinesiotherapy} alt='kinesiotherapy' height={1000} width={1000}></img></div>
                        <div className='text-3xl font-serif text-center m-4'>Kinesiotherapy</div>
                    </div>

                    <div className='p-4'>
                        <div className='rounded-lg shadow-black shadow-lg'><img src={Electrotherapy} alt='kinesiotherapy' height={1000} width={1000}></img></div>
                        <div className='text-3xl font-serif text-center m-4'>Electrotherapy</div>
                    </div>

                    <div className='p-4'>
                        <div className='rounded-lg shadow-black shadow-lg'><img src={Yoga} alt='kinesiotherapy' height={1000} width={1000}></img></div>
                        <div className='text-3xl font-serif text-center m-4'>Yoga</div>
                    </div>

                    <div className='p-4'>
                        <div className='rounded-lg shadow-black shadow-lg'><img src={Skeletan} alt='kinesiotherapy' height={1000} width={1000}></img></div>
                        <div className='text-3xl font-serif text-center m-4'>Skeletan</div>
                    </div>



                </div>


            </div>
        </div>
    )
}

export default page
