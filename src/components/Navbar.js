
import { useState } from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import Logo from "../images/Logo.png"

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)
  //   const router = useRouter();

  const openMenu = () => {
    setIsOpen(!isOpen)
  }


  return (
    <div>
      <div>
        <div className="nav w-full flex items-center bg-gray-50 shadow-lg">


          <div className="nav w-full flex items-center justify-between bg-gray-50 font-serif">
            <div className="p-2 flex items-center justify-center ">
              <img
                src={Logo}
                alt="logo"
                width={80}
                height={80}
                className="rounded-lg"
              //   onClick={()=>router.push("/")}
              />
              <h1 className='m-2 md:text-1xl md:font-semibold'>Tanmayi College of Physiotherapy, Satana</h1>
            </div>

            <div className="hidden md:block">
              <ul className=" justify-center items-center grid grid-cols-5">
                <li className="m-3">
                  <a href="/home">Home</a>
                </li>
                <li className="m-3">
                  <a href="./admission">Admission</a>
                </li>
                <li className="m-3">
                  <a href="/physiotherapy">Physiotherapy</a>
                </li>
                <li className="m-3 ">
                  <a href="/activities">Activities</a>

                </li>
                <li className="m-3 ">
                  <a href="/department">Department</a>

                </li>
                <li className="m-3 ">
                  <a href="/facilities">Facilities</a>
                </li>
                <li className="m-3 ">
                  <a href="/about">About</a>
                </li>
                <li className="m-3">
                  <a href="/contact">Contact</a>
                </li>
                <li className="m-3 ">
                  <a href="/muhs">MUHS Mandate</a>
                </li>
              </ul>

            </div>

            <div className='hidden md:block'>
              <li className="m-2  flex">
                <p className='m-2'><a href="https://www.facebook.com/profile.php?id=100094336665163"><FacebookIcon /></a></p>

                <p className='m-2'><TwitterIcon /></p>
                <p className='m-2'><InstagramIcon /></p>
              </li>
            </div>

            <div className="space-y-2 m-3 block md:hidden " onClick={openMenu}>
              <div className="w-8 h-0.5 bg-gray-600"></div>
              <div className="w-8 h-0.5 bg-gray-600"></div>
              <div className="w-8 h-0.5 bg-gray-600"></div>
            </div>


          </div>
        </div>
        {isOpen && (<div className="bg-gray-100 md:hidden">
          <ul className='flex flex-col font-bold text-left p-2'>
            <li className='p-2' ><a href="/home">Home</a></li>
            <li className='p-2' ><a href="/admission">Admission</a></li>
            <li className='p-2'><a href="/physiotherapy">Physiotherapy</a></li>
            <li className='p-2' ><a href="/activities">Activities</a></li>
            <li className='p-2' ><a href="/department">Department</a></li>
            <li className='p-2' ><a href="/facilities">Facilities</a></li>
            <li className='p-2' ><a href="/about">About</a></li>
            <li className='p-2' ><a href="/contact">Contact</a></li>
            <li className='p-2' ><a href="/muhs">MUHS Mandate</a></li>
            <li className='flex'>
              <p className='m-2'><a href="https://www.facebook.com/profile.php?id=100094336665163"><FacebookIcon /></a></p>
              <p className='m-2'><TwitterIcon /></p>
              <p className='m-2'><InstagramIcon /></p>
            </li>





          </ul>
        </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
