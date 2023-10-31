import React from 'react'
import Logo from "../images/Logo.png"
const Footer = () => {
    return (
        <div>



            <footer className="bg-gray-200 text-gray-900">
                <div className='flex items-center justify-center m-4 p-4'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29875.968208784336!2d74.195732!3d20.608629!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bde63522b66accb%3A0xbd6de07626d7be43!2sShri%20Someshwar%20Maharaj%20Trust%20Tanmay%20College%20of%20Physiotherapy!5e0!3m2!1sen!2sin!4v1698739167395!5m2!1sen!2sin" width={800} height={200} style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='map'></iframe>
                </div>
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0">
                            <a href="/" className="flex items-center">
                                <img src={Logo} className="h-8 mr-3" alt="FlowBite Logo" />
                                <span className="self-center text-1xl font-semibold whitespace-nowrap dark:text-black">Tanmayi College of Physiotherapy</span>
                            </a>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                {/* <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2> */}
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <a href="/Home" className="hover:underline">Home</a>
                                    </li>
                                    <li className='mb-4'>
                                        <a href="/Physiotherapy" className="hover:underline">Physiotherapy</a>
                                    </li>
                                    <li className='mb-4'>
                                        <a href="/Activities" className="hover:underline">Activities</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                {/* <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2> */}
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <a href="/Department" className="hover:underline ">Department</a>
                                    </li>
                                    <li className='mb-4'>
                                        <a href="/Facilities" className="hover:underline">Facilities</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="/About" className="hover:underline">About</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                {/* <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">About</h2> */}
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <a href="/Contact" className="hover:underline">Contact</a>
                                    </li>

                                    <li>
                                        <a href="/MUHS" className="hover:underline">MUHS Mandate</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#" className="hover:underline">TCOP™</a>. All Rights Reserved.
                        </span>
                        <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                            <a href="https://www.facebook.com/profile.php?id=100094336665163" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                    <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd" />
                                </svg>
                                <span className="sr-only">Facebook page</span>
                            </a>

                            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                                    <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd" />
                                </svg>
                                <span className="sr-only">Twitter page</span>
                            </a>


                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer
