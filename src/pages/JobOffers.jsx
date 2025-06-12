import { useEffect, useState } from 'react';

function JobOffers() {

  const [appliedOffers, setAppliedOffers] = useState([])



  useEffect(() => {
    const fetching = async () => {
      const res = await fetch('/data.json');
      const data = await res.json()
      setAppliedOffers([data[1], data[3], data[4]])
    }

    fetching()
  },[])

  const status = ["Not seen yet", "Acceptable", "Unacceptable", "In proccess"]
  const statu = Math.floor(Math.random() * status.length) + 1
  
  
  return (
    <div className=" px-4 py-5 lg:fixed lg:right-0 lg:w-[360px] lg:h-screen overflow-y-scroll scrollbar-hide z-0 ">
      <h1 className="text-2xl font-bold mb-10 fixed w-full top-0 py-6 bg-white">Job Offers</h1>
      <div className='mt-20'>
        {appliedOffers.length > 0 
        ? (
          appliedOffers.map(offer => (
            <div key={offer.id} className='w-full py-2 px-1 mb-4 border rounded-lg bg-white'>
              <p>You have applied to {offer.name} at 1/4/2025, at 12:34 PM </p>
              <p className='text-sm italic text-gray-500'> <strong>Status:</strong> {status[offer.id - statu]}</p>
            </div>
          ))
        )
        : ( <p className="mt-13 text-center">
            You have not applied for any job. Every job you have applied for will
            appear here.
          </p>
        )
      }
      </div>

      
    </div>
  );
}

export default JobOffers;
