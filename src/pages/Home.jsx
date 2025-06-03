import { suggestionsNav } from '../components/assets'
import CardsOffers from '../components/CardsOffers'
import logo from '/Logo.png'

function Home() {
  return (
    <div className='mt-3'>
      <header className='flex justify-between items-center px-6 h-14'>
      <img 
        src={logo} 
        alt="Job Market"
        width={120}
        height={120}
      />
      <div className='flex items-center gap-4'>
        <div className='w-10 h-10 rounded-full active:bg-slate-200 flex justify-center items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z"/></svg>
        </div>
        <div className='w-10 h-10 rounded-full active:bg-slate-200 flex justify-center items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f" className='rounded-full active:bg-slate-200' ><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
        </div>
      </div>
      </header>
      <div className='flex items-center gap-2 w-full py-2 px-3 overflow-x-scroll scrollbar-hide'>
        <div className=' rounded-sm flex items-center gap-2 py-1 px-2 bg-white shadow-md active:bg-slate-50'>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M440-120v-240h80v80h320v80H520v80h-80Zm-320-80v-80h240v80H120Zm160-160v-80H120v-80h160v-80h80v240h-80Zm160-80v-80h400v80H440Zm160-160v-240h80v80h160v80H680v80h-80Zm-480-80v-80h400v80H120Z"/></svg>
          <p className='capitalize font-bold text-sm'>filter</p>
        </div>
        {suggestionsNav.map((suggestion, i) => (
          <div key={i} className='py-1 px-2 rounded-sm bg-white shadow-md active:bg-slate-50'>
            <p className='text-nowrap'>{suggestion}</p>
          </div>
        ))}
      </div>
      <CardsOffers  />
    </div>
  )
}



export default Home