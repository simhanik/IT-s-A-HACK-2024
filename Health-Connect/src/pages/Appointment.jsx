import React from 'react'

const Appointment = () => {

  const {docId} = usePrams()
  const  {doctors} = useContext(AppContext)

  const [docInfo,setDocInfo] = useState(null)
  const fetchDocInfo = async () =>{
  const docInfo = doctors.find(doc => doc._id === docId)
  setDocInfo(docInfo)
  console.log(docInfo)
  }

  useEffect(()=>{
    fetchDocInfo()
  },[doctors,docId])
  return (

    <div>
      {/* -----------------Doctor Details ------------------*/}
      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px]' src={docInfo.image} alt="" />
        </div>
        <div>
          {/* ----------------Doc Info : name , degree,experience ----------------------*/}
          <p>
            {docInfo.name}
            <img src={assets.verified_icon} alt="" />
          </p>
          <div>
            <p>{docInfo.degree} - {docInfo.speciality}</p>
            <button>{docInfo.experience}</button>
          </div>
          {
            <div>
              <p>
                Abput <img src={assets.info_icon} alt="" />
              </p>
              <p>{docInfo.about}</p>
            </div>

          }

        </div>
      </div>
    </div>
  )
}

export default Appointment