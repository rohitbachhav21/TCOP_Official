import React from 'react'
import founder from "../images/founder.jpg"
import secretory from "../images/secretory.jpg"
import chairman from "../images/chairman.jpg"
const page = () => {
    return (
        <div>

            <div>


                <div className='bg-blue-700 text-white text-4xl md:text-7xl flex justify-center items-center font-serif'>
                    About Us
                </div>

                <div className='p-4 md:p-10'>

                    <div className='md:flex'>
                        <br />
                        <div className='font-serif text-4xl'>Tanmayi College of Physiotherapy</div>
                        <div className='block md:hidden'>
                            <br />
                        </div>
                        <div className='text-justify md:pb-10 md:pl-10 md:pr-10 text-gray-500'>
                            <div >Welcome to Tanmayi College of Physiotherapy, a dynamic and innovative institution committed to shaping the future of physiotherapy education. With a passion for excellence and a student-centric approach, we are dedicated to providing a high-quality learning experience for aspiring physiotherapists.</div>
                            <br />
                            <div>At Tanmayi College of Physiotherapy, we believe in the transformative power of education. Our mission is to empower students with the knowledge, skills, and values necessary to excel in the field of physiotherapy and make a positive impact on the lives of individuals and communities.</div>
                        </div>
                    </div>

                    <div className='mt-4'>
                        <div className='font-serif bg-gray-200 text-gray-500 p-4 md:p-28 text-4xl md:text-6xl italic'>
                            Empowering Compassionate Care: Transforming Lives Through Excellence in Physiotherapy and Nursing Education
                        </div>

                        <div className='bg-gray-200 md:grid md:grid-cols-3'>

                            <div className='p-4'>
                                <div className='rounded-lg shadow-black shadow-lg'><img src={founder} alt='kinesiotherapy' height={1000} width={1000}></img></div>
                                <div className='text-3xl font-serif text-center m-4'>Mr.Vasant Gawali (Founder)</div>
                            </div>

                            <div className='p-4'>
                                <div className='rounded-lg shadow-black shadow-lg'><img src={chairman} alt='kinesiotherapy' height={1000} width={1000}></img></div>
                                <div className='text-3xl font-serif text-center m-4'>Mrs.Sadhana Gawali (Chairman)</div>
                            </div>

                            <div className='p-4'>
                                <div className='rounded-lg shadow-black shadow-lg'><img src={secretory} alt='kinesiotherapy' height={1000} width={1000}></img></div>
                                <div className='text-3xl font-serif text-center m-4'>Mr.Rajendra Gangurde (Secretary)</div>
                            </div>

                        </div>
                    </div>


                    <div className='mt-4'>
                        <div className='md:flex md:items-center md:justify-center' >
                            <div className='text-2xl font-serif pt-4 pb-4'>Mission Statement</div>
                            <div className='text-justify text-gray-400 md:m-4 md:w-3/4'>Our mission is to empower our students with the knowledge, skills, and values necessary to provide compassionate care in the fields of physiotherapy and nursing. Through a focus on excellence in education, we strive to equip our students with the highest level of expertise and professionalism.</div>
                        </div>

                        <div className=''>
                            <br />
                            <hr />
                            <br />
                        </div>

                        <div className='md:flex md:items-center md:justify-center' >
                            <div className='text-2xl font-serif pt-4 pb-4'>Our Core Values</div>
                            <div className='text-justify text-gray-400 md:m-4 md:w-3/4'>We have a culture that is modern, relevant, and inspires students to have a brighter future. We are determined in our approach to learning, and bold in our ambitions.</div>
                        </div>

                        <div className=''>
                            <br />
                            <hr />
                            <br />
                        </div>

                        <div className='md:flex md:items-center md:justify-center' >
                            <div className='text-2xl font-serif pt-4 pb-4'>Our Philosophy</div>
                            <div className='text-justify text-gray-400 md:m-4 md:w-3/4'>Placing the patient at the center of healthcare practice and education. Emphasizing the importance of understanding and addressing the unique needs, preferences, and goals of each individual in order to provide personalized and effective care.</div>
                        </div>




                    </div>





                </div>

            </div>

        </div>
    )
}

export default page
