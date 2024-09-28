

const About = () => {
  return (
    <div className="tex">
        <div className='pl-45 text-2xl pt-10 text-gray-500 '>
        <p className="flex items-center justify-center mb-5 text-blue-400 ">ABOUT <span className='text-blue-800'> US</span></p>
        </div>

        <div className='text-center ml-70 my-10 flex flex-col md:flex-row'>
            
            
            <div className='flex flex-col justify-start gap-6 text-sm text-gray-600'>
                <p>At HealthConnect, we are committed to revolutionizing healthcare management by addressing key inefficiencies in the appointment scheduling process, patient record management, and patient-doctor communication. Our platform is designed with the goal of making healthcare more accessible, organized, and efficient for both patients and healthcare providers.</p>
                <p>HealthConnect provides a seamless, user-friendly experience that enables patients to easily schedule appointments with trusted doctors. By simplifying this process, we aim to eliminate the traditional challenges of long wait times, scheduling conflicts, and administrative bottlenecks.</p>
                <b className='text-blue-900'>Our Vision</b>
                <p>At HealthConnect, our vision is to create a world where healthcare is easily accessible, efficient, and patient-centered. We strive to bridge the gap between patients and healthcare providers by leveraging cutting-edge technology to streamline appointment scheduling, enhance medical record management, and improve communication.</p>
            </div>
        </div>

        <div className='text-xl my-4'>
            <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
        </div>
        <div className='flex flex-col md:flex-row mb-20'>

           <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer '>
            <b>AI-powered ChatBot:</b>
            <p>AI assitance at your service to help you navigate through the site</p>
           </div>
           <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
           <b>Doctor Recommender:</b>
           <p>Based on your feedback and diagnose history our chatbot wil recommend you Suitable doctor</p>
           </div>
           <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
           <b>PERSONALIZATION:</b>
           <p>Tailored recommendations and reminders to help you stay on top of your health</p>
           </div>

        </div>
    </div>

  )
}

export default About