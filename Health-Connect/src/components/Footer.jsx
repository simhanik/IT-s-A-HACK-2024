
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className='md:mx-10 rounded-md'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
          <img className='' src={assets.logo} alt="HealthConnect Logo" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6 tex'>
            HealthConnect is a comprehensive health appointment management platform that
            connects patients with doctors, streamlines appointment scheduling, and enhances
            the overall healthcare experience. With advanced features like AI-powered doctor
            recommendations, telemedicine integration, health record management,
            HealthConnect makes healthcare more accessible, secure, and efficient.
          </p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+91 12345 67890</li>
            <li>healthconnect@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className='py-5 text-white text-sm text-center bg-gray-900 rounded-sm'>Copyright 2024 @ HealthConnect - All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
