import React from 'react'
import { majors, tranding } from '../components/assets'
import { Link } from 'react-router-dom'

function Search() {
  return (
    <div className='h-[1200px] w-full'>
      <div className='w-full h-14 flex items-center gap-2 fixed top-0 pt-3 px-2 bg-gray-100'>
        <Link to={'/'}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg> 
        </Link>
        <div className=' w-full h-full relative'>
          <input type="text" placeholder='search...' className='bg-white w-full h-full rounded-full px-4 border-none outline-none' />
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f" className='absolute right-4 top-3'><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
        </div>
      </div>
      <div className='w-full mt-22'>
        {tranding.map((trend, i) => (
          <div key={i} className='flex items-center justify-between px-2 py-2 mb-3 active:bg-gray-300'>
            <div className='flex items-center gap-1'> 
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="20px" fill="#1f1f1f"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
            <p className='font-bold'>{trend}</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="m136-240-56-56 296-298 160 160 208-206H640v-80h240v240h-80v-104L536-320 376-480 136-240Z"/></svg>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Search