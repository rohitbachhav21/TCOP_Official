
import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import EmailIcon from '@mui/icons-material/Email';

const page = () => {
    return (
        <div>
            <div>


                <div className='bg-blue-700 text-white p-4'>
                    <div className='bg-blue-700 text-white text-4xl md:text-7xl flex justify-center items-center font-serif'>
                        Contact Us
                    </div>

                    <div className='md:flex '>

                        <div className='contactdetails md:m-4'>
                            <div className='mt-4 mb-4'>Wish to enquire about admission, syllabus or anything else? You can walk in during office hours, give us a call or simply submit the form here.</div>

                            <div>
                                <div className='flex '>
                                    <LocationOnIcon />
                                    <p className='text-2xl font-serif'>Address</p>
                                </div>
                                <div className='font-semibold'>Padma Nagar, Bhakshi Road, Satana, Tal. Bagalan, Dist. Nashik, 423301</div>
                            </div>

                            <br />
                            <hr />
                            <br />

                            <div>
                                <div className='flex '>
                                    <PhoneEnabledIcon />
                                    <p className='text-2xl font-serif'>Phone</p>
                                </div>
                                <div className='font-semibold'>02555223938 / 9921264880 / 7057467770 / 9049693221</div>
                            </div>

                            <br />
                            <hr />
                            <br />

                            <div>
                                <div className='flex '>
                                    <EmailIcon />
                                    <p className='text-2xl font-serif'>Email</p>
                                </div>
                                <div className='font-semibold'>Mail.tanmayiphysiotherapy29@gmail.com</div>
                            </div>

                            <br />
                            <hr />
                            <br />

                        </div>


                        <div className='form md:m-4'>
                            <div className='text-2xl font-serif'>Send us a message</div>
                            <form className='flex-col items-center justify-center' action="https://formspree.io/f/xdoqozer" method='POST'>
                                <input type="text" placeholder='First name' className='p-4 mt-2 bg-white text-gray-800 w-full rounded-sm' name='Name' required />
                                <input type="email" placeholder='Email address' className='p-4 mt-2 bg-white text-gray-800 w-full rounded-sm' name="Email" required />
                                <input type="text" placeholder='Subject' className='p-4 mt-2 bg-white text-gray-800 w-full rounded-sm' name='Subject' required />
                                <input type="text" placeholder='Your message' className='p-4 mt-2 bg-white text-gray-800 w-full rounded-sm' name='Message' required />
                                <button className='p-4 mt-4 bg-white text-blue-700 rounded-sm font-serif font-semibold'>Submit</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}




export default page


