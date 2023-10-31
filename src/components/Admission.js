
import React from 'react'
import building from "../images/bulding.jpg"


const page = () => {
    return (
        <div>

            <div >
                <div className='bg-blue-700 text-white text-4xl md:text-7xl flex justify-center items-center font-serif'>
                    Medical Education
                </div>
                <div className='md:flex p-10'>
                    <div>
                        <div className='font-serif text-4xl mt-2 mr-2 mb-2'>
                            First Year Admission
                        </div>
                        <div className='font-serif text-2xl mt-2 mr-2 mb-2'>
                            How to become a TCOP student
                        </div>
                        <p className='text-justify text-gray-400 w-full md:w-3/4'>
                            We are delighted that you are considering an Undergraduate programmes at Tanmayi College of Physiotherapy. Please read all information and requirements carefully to ensure a complete and correct application. Feel free to contact us on  <span className='text-black bg-gray-200'>Mail.tanmayiphysiotherapy29@gmail.com</span> in case of any queries
                        </p>
                    </div>
                    <div className='w-full m-2'>
                        <img src={building} alt='building' height={1000} width={1000}></img>
                    </div>
                </div>


                <div className='bg-gray-100'>
                    <div className='flex m-4 items-center justify-center text-2xl font-serif '>
                        <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                        </svg>
                        </div>
                        <div>Admission Process</div>
                    </div>
                    <div className='step1 m-6 md:flex '>
                        <div className='bg-white  shadow-red-400  shadow-md p-5 flex text-center items-center justify-center font-serif '>Step 1</div>
                        <div className=' text-gray-400 mt-2 text-justify md:ml-4'>Candidate to pass 12th with PCB(Physics,Chemistry & Biology) and NEET</div>
                    </div>
                    <div className='step2 m-6 md:flex'>
                        <div className='bg-white  shadow-red-400  shadow-md p-5 flex text-center items-center justify-center font-serif'>Step 2</div>
                        <div className=' text-gray-400 mt-2 text-justify md:ml-4'>DMER will put up list of selected candidates for all colleges</div>
                    </div>
                    <div className='step3 m-6 md:flex'>
                        <div className='bg-white  shadow-red-400  shadow-md p-5 flex text-center items-center justify-center font-serif'>Step 3</div>
                        <div className=' text-gray-400 mt-2 text-justify md:ml-4'>Student will complete college application form and pay course fee after scrutiny of documents, for admission</div>
                    </div>
                    <div className='step4 m-6 md:flex'>
                        <div className='bg-white  shadow-red-400  shadow-md p-5 flex text-center items-center justify-center font-serif'>Step 4</div>
                        <div className=' text-gray-400 mt-2 text-justify md:ml-4'>Further admission procedure as per NEET brochure</div>
                    </div>

                    <div className='text-2xl font-serif m-6'>
                        For Institutional Quota (Including NRI & OMS)
                    </div>

                    <div className='step1 m-6 md:flex'>
                        <div className='bg-white  shadow-red-400  shadow-md p-5 flex text-center items-center justify-center font-serif'>Step 1</div>
                        <div className=' text-gray-400 mt-2 text-justify md:ml-4'>Institute will publish advertisement in the newspaper & invite applications</div>
                    </div>

                    <div className='step4 m-6 md:flex'>
                        <div className='bg-white  shadow-red-400  shadow-md p-5 flex text-center items-center justify-center font-serif'>Step 2</div>
                        <div className=' text-gray-400 mt-2 text-justify md:ml-4'>Interested candidates will collect the application form by paying requisite form fee</div>
                    </div>
                    <div className='step4 m-6 md:flex'>
                        <div className='bg-white  shadow-red-400  shadow-md p-5 flex text-center items-center justify-center font-serif'>Step 3</div>
                        <div className=' text-gray-400 mt-2 text-justify md:ml-4'>Submission of dully filled up Application form along with required documents. For NRI applicants,scrutiny certificate from DMER / ARA is mandatory</div>
                    </div>
                    <div className='step4 m-6 md:flex'>
                        <div className='bg-white  shadow-red-400  shadow-md p-5 flex text-center items-center justify-center font-serif'>Step 4</div>
                        <div className=' text-gray-400 mt-2 text-justify md:ml-4'>Admission Commmittee will scrutinize the documents thoroughly as per the norms.(First preference will be given to NRI candidates)</div>
                    </div>
                    <div className='step4 m-6 md:flex'>
                        <div className='bg-white  shadow-red-400  shadow-md p-5 flex text-center items-center justify-center font-serif'>Step 5</div>
                        <div className=' text-gray-400 mt-2 text-justify md:ml-4'>Eligible candidates will be selected based on their merit and final list will be displayed on College notice board as well as on College website.Selected candidates will be given admission</div>
                    </div>
                </div>



            </div>

        </div>
    )
}

export default page
