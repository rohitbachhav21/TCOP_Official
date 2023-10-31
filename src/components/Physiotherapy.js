import React from 'react'
import classroom from "../images/classroom.jpg"
const page = () => {
    return (
        <div>
            <div>

                <div className='bg-blue-700 text-white text-3xl md:text-7xl text-center font-serif'>
                    Bachelor of Physiotherapy (B.P.T.H)
                </div>
                <div className='m-4 md:flex md:p-10 md:justify-center md:w-3/4'>
                    <div>
                        <div className='shadow-gray-200 shadow-lg md:mr-10 '>
                            <div className='font-serif text-2xl bg-gray-200 pl-2 pt-3 pb-3'>Overview</div>
                            <div className='bg-gray-50 pl-2 text-gray-500'>
                                <ul>
                                    <li>Bachelor of Physiotherapy</li>
                                    <li>Intake: 50</li>
                                    <li>State Quota: 42</li>
                                    <li>Institute Quota: 08</li>
                                </ul>
                            </div>
                        </div>

                        <div className='shadow-gray-200 shadow-lg md:mr-10 mt-4'>
                            <div className='font-serif text-2xl bg-gray-200 pl-2 pt-3 pb-3'>Eligibility Criteria</div>
                            <div className='bg-gray-50 pl-2 text-gray-500'>
                                <ul>
                                    <li className='mt-2' >Admission eligibility for this course is passing of 12th standard examination of Maharashtra Higher Secondary School Board (H.S.C.) or equivalent with English, Physics, Chemistry, and Biology (Botany & Zoology) subjects.</li>
                                    <li className='mt-2'>Admissions are centrally carried out through a Common Entrance Test, NEET (National Eligibility & Entrance Test). Admission to course is on the basis of merit; according to the results of the NEET examination</li>
                                </ul>
                            </div>
                        </div>

                        <div className='shadow-gray-200 shadow-lg md:mr-10 mt-4 mb-4'>
                            <div className='font-serif text-2xl bg-gray-200 pl-2 pt-3 pb-3'>Documents Required</div>
                            <div className='bg-gray-50 pl-2 text-gray-500'>
                                <div className='text-2xl text-black font-serif'>
                                    List Of Original Documents which must be submitted at the time of admission by all students along with :
                                </div>
                                <ul>
                                    <li className="mt-2">3 sets of attested photocopies</li>
                                    <li className="mt-2">20 passport size photographs</li>
                                    <li className="mt-2">NEET Admit Card</li>
                                    <li className="mt-2">Copy of online application form (Latest) filled on www.mahacet.org</li>
                                    <li className="mt-2">NEET Marksheet</li>
                                    <li className="mt-2">Domicile/Nationality Certificate</li>
                                    <li className="mt-2">Medical Fitness Certificate (In NEET Brochure format)</li>
                                    <li className="mt-2">S.S.C. / equivalent mark sheet</li>
                                    <li className="mt-2">S.S.C./ equivalent passing certificate</li>
                                    <li className="mt-2">H.S.C./ equivalent mark sheet</li>
                                    <li className="mt-2">H.S.C./ equivalent passing certificate</li>
                                    <li className="mt-2">College Leaving Certificate</li>
                                    <li className="mt-2">Gap Certificate (if applicable)</li>
                                    <li className="mt-2">Transfer Certificate / Migration Certificate (if applicable)</li>
                                    <li className="mt-2">Aadhar Card (Attested photocopy)</li>
                                </ul>

                                <div className='text-2xl text-black font-serif'>
                                    Additional documents for reserved category
                                </div>

                                <ul>
                                    <li className="mt-2">Caste Certificate</li>
                                    <li className="mt-2">Caste Validity Certificate – Mandatory</li>
                                    <li className="mt-2">Non-Creamy layer Certificate ( If Applicable )</li>
                                </ul>

                                <div className='text-2xl text-black font-serif'>
                                    Additional documents for EWS Category
                                </div>
                                <ul><li className="mt-2">EWS Eligibility Certificate</li></ul>

                                <div className='text-2xl text-black font-serif'>
                                    Additional documents for Minority candidate
                                </div>

                                <ul>
                                    <li className="mt-2">For Jain/Muslim/Christian Category – School Leaving Certificate, Certificate from religious place & Affidavit</li>
                                    <li className="mt-2">For Gujarati/Sindhi minority – School Leaving Certificate & Affidavit</li>
                                    <li className="mt-2">For Hindi Linguistic minority – School Leaving Certificate & Affidavit</li>
                                </ul>

                                <div className='text-2xl text-black font-serif'>
                                    Additional Douments For NRI Students
                                </div>

                                <ul>
                                    <li className="mt-2">Family tree Affidavit duly signed by claimant</li>
                                    <li className="mt-2">Passport of sponsor and student (photocopy)</li>
                                    <li className="mt-2">Documents showing relation between the sponsor and student</li>
                                    <li className="mt-2">Affidavit of claimant disclosing his/her full identity i.e. Name, Age, Address of residence</li>
                                    <li className="mt-2">(Passport/Birth Certificate/Marriage Certificate/Ration Card)</li>
                                    <li className="mt-2">Affidavit of Sponsor disclosing his/her full identity i.e. Name, Age, Address of Residence, Occupation, Relationship with candidate duly signed by sponsor</li>
                                    <li className="mt-2">Driving license/Telephone bill/Electricity bill/ ITR of last 2 years confirming the sponsor’s address</li>
                                    <li className="mt-2">Bank statement of last six months</li>
                                    <li className="mt-2">Valid VISA of sponsor & student (if applicable)</li>
                                </ul>


                            </div>
                        </div>


                    </div>


                    <div className=''>
                        <img src={classroom} alt="physiotherapy" width={1000} height={1000} ></img>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default page
