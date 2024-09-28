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
      <div>
        <div>
          <img src={docInfo.image} alt="" />
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
            dc

          }

        </div>
      </div>
    </div>
  )
}

export default Appointment