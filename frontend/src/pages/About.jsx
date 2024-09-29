
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className=''>

      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>ABOUT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.Aboutus} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
        <p>At HealthConnect, we are committed to revolutionizing healthcare management by addressing key inefficiencies in the appointment scheduling process, patient record management, and patient-doctor communication. Our platform is designed with the goal of making healthcare more accessible, organized, and efficient for both patients and healthcare providers.</p>
                <p>HealthConnect provides a seamless, user-friendly experience that enables patients to easily schedule appointments with trusted doctors. By simplifying this process, we aim to eliminate the traditional challenges of long wait times, scheduling conflicts, and administrative bottlenecks.</p>
                <b className='text-blue-900 text-cent'>Our Vision</b>
                <p>At HealthConnect, our vision is to create a world where healthcare is easily accessible, efficient, and patient-centered. We strive to bridge the gap between patients and healthcare providers by leveraging cutting-edge technology to streamline appointment scheduling, enhance medical record management, and improve communication.</p>

        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY  <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-gradient-to-tr from-[#EE9AE5] to-[#5961F9] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer '>
            <b>AI-powered ChatBot:</b>
            <p>AI assitance at your service to help you navigate through the site</p>
           </div>
           <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-gradient-to-tr from-[#EE9AE5] to-[#5961F9] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer hover:'>
           <b>Doctor Recommender:</b>
           <p>Based on your feedback and diagnose history our chatbot wil recommend you Suitable doctor</p>
           </div>
           <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-gradient-to-tr from-[#EE9AE5] to-[#5961F9] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
           <b>Personalization:</b>
           <p>Tailored recommendations and reminders to help you stay on top of your health</p>
           </div>
      </div>

    </div>
  )
}

export default About

