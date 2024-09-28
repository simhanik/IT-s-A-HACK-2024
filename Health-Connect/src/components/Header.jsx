
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-gradient-to-tr from-[#EE9AE5] to-[#5961F9] rounded-lg px-6 md:px-10 lg:px-20'>


       {/* -----Left Side----- */}
       <div className='ed:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
         <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>HealthConnect - A Smart Health Management System</p>
         <div className='flex flex-col md:flex-row items-center gap-5 text-white text-[13px] font-light '>
            {/* <img className='w-38' src={assets.group_profiles} alt="" /> */}
            <p className=' text-xl'> HealthConnect is a comprehensive health appointment
             management platform that connects patients with doctors, 
             streamlines appointment scheduling, and enhances the overall 
              healthcare experience.</p>
         </div>
         <a href="#speciality" className='flex items-center gap-2 px-8 py-3 rounded-full text-white text-sm m-auto md:m-0 hover:scale-105 transition-all ease-in-out duration-100 hover:delay-150 bg-orange-500 hover:bg-white hover:text-orange-500 hover:shadow-md' >
            Book appointment <img className='w-3 color-white' src={assets.arrow_icon} alt="" />
         </a>
        </div> 

        {/* ------Right Side----- */}
        {/* <div className='md:w-1/2 relative'>
           <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt="" />
        </div> */}
    </div>
  )
}

export default Header