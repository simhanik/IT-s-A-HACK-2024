
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {

  const navigate = useNavigate()

  return (
    <div className='flex bg-gradient-to-tr from-[#EE9AE5] to-[#5961F9] rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10'>

        <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
            <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white'>
                <p>Book appointment</p>
                <p className='mt-4'>With 100+ Trusted Doctors</p>
            </div>
            <button onClick={()=>{navigate('/login'); scrollTo(0,0)}} className='text-sm sm:text-base text-white px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all ease-in-out duration-100 hover:delay-150 bg-orange-500 hover:bg-white hover:text-orange-500 hover:shadow-md'>Create account</button>
        </div>

        <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
            <img className='w-full absolute bottom-0 right-0 max-w-md' src={assets.appointment_img} alt="" />
        </div>

    </div>
  )
}

export default Banner