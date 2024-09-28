import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets} from '../assets/assets';

const TopDoctors = () => {

   const navigate = useNavigate()
   const {doctors} = useContext(AppContext)

  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10 shadow-xl rounded-sm pb-8'>
      <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
      <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors.</p>
      <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-6 '>
        {doctors.slice(0, 10).map((item, index) => (
          <div onClick={()=>navigate(`/appointments/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-100 ease-in-out shadow-sm hover:shadow-xl hover:delay-150' key={index}>
            <img className='bg-blue-50' src={item.image} alt="" />
            <div className='p-4'>
              <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
              </div>
              <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
              <p className='text-gray-600 text-sm'>{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={()=>{navigate('/doctors'); scrollTo(0,0)}} className='flex flex-row bg-orange-500 text-white px-12 py-2 rounded-full mt-9 hover:bg-white hover:text-orange-500 gap-3 hover:shadow-lg transition ease-in-out duration-100 hover:delay-150'>More <img src={assets.arrow_icon} alt="" className='mt-2' /></button>
    </div>
  );
};

export default TopDoctors;
