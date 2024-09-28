import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-gradient-to-tr from-[#EE9AE5] to-[#5961F9] rounded-lg px-6 md:px-10 lg:px-20'>


       {/* -----Left Side----- */}
       <div className='ed:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
         <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>HealthConnect - <br />A Smart Health <br /> Management System</p>
         <div className='flex flex-col md:flex-row items-center gap-5 text-white text-[13px] font-light '>
            <img className='w-38' src={assets.group_profiles} alt="" />
            <p className=''> HealthConnect is a comprehensive health appointment<br />
             management platform that connects patients with doctors,<br /> 
             streamlines appointment scheduling, and enhances the overall <br />
              healthcare experience.</p>
         </div>
         <a href="#speciality" className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300' >
            Book appointment <img className='w-3' src={assets.arrow_icon} alt="" />
         </a>
        </div> 

        {/* ------Right Side----- */}
        <div className='md:w-1/2 relative'>
           <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt="" />
        </div>
    </div>
  )
}

export default Header