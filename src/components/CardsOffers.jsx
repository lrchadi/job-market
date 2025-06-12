import { useEffect, useState } from 'react'
import Interactions from './Interactions'

function CardsOffers() {

  const [offers, setOffers] = useState([])
  


  useEffect(() => {
    const fetchingData = async () => {
      const response = await fetch('/data.json');
      const result = await response.json();
      setOffers(result)
    }
    const time = setTimeout(() => {
      fetchingData()
    }, 1000)
    
    return () => clearTimeout(time)
  }, [])
  
  
  
    
  return (
    <div className="mt-32 mb-20 flex flex-col justify-center gap-3 lg:ml-[365px] lg:w-[790px]">
        {offers.length > 0 ? 
          offers.map(offer => (
            <div key={offer.id} className="bg-white px-2 py-3 border border-gray-500  ">
              <div className="flex items-center justify-start gap-2">
                <div className='w-[40px] h-[40px] rounded-full overflow-hidden'>
                  <img src={offer.image} alt={offer.name} className='object-cover object-center'/>
                </div>
                <div>
                  <h1 className='text-lg font-semibold'>{offer.name}</h1>
                  <div className='flex items-center gap-2'>
                    <p className='text-[12px] text-gray-600 italic'>{offer.city}</p>
                    <p className='text-[12px] text-gray-600 italic'>{offer.time}</p>
                  </div>
                </div>
              </div>
              <p className='md:text-lg'>
                {offer.offer} 
              </p>
            <div className='flex items-center justify-around mt-4 p-1'>
              <Interactions offer={offer} />
            </div>
          </div>
          ))
        : <FetchingIcon />}
    </div>
  )
}


const FetchingIcon = () => {
  return (
    <div className='w-full h-screen flex justify-center items-start mt-22'>
      <div className="loader"></div>
    </div>
  )
}

export default CardsOffers