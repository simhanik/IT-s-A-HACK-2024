import { assets } from "../assets/assets"

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
          <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='justify-center items-center w-full md:max-w-[360px] ' src={assets.contactus} alt="" />
        <div className="flex flex-col">
          <p>OUR OFFICE:</p>
          <p> Bhilai Institute Of Technology <br /> Durg, Chhattisgarh, India</p>
          <p>Tel: +91 12345 67890 <br />Email: healthconnect@gmail.com</p>
        </div>

      </div>
    </div>
  )
}

export default Contact
