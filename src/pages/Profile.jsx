import userImage from '/user.jpg'
import banner from '/banner_image.avif'
import Navbar from "../components/Navbar";

function Profile() {
  return (
    <>
      <Navbar />

    <div className='w-full mb-6'>
      <div className="w-full h-32">
        <img src={banner} alt="banner" className='w-full h-full' />
      </div>
      <div className='flex flex-col items-start px-4  w-fit relative -top-16'>  
        <div className='w-[120px] h-[120px] rounded-full border-3 border-gray-800'>
          <img src={userImage} alt="user" width={120} height={120} className='rounded-full' />
        </div>
        <h1 className='text-2xl font-semibold mt-2'>Ahmed amin</h1>
        <p className='text-gray-600'>| Frontend Developper</p>
        <p className='mt-4 text-sm'>Hello, I'm a web frontend developper, with more than 4 years of experience. I've have created many projects and worked with soo many companies as a freelancer, and I will be glad if my profile let you be interested to work together.</p>
        <div className='flex items-center gap-0.5 mt-4'>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="18px" fill="#1f1f1f"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>
          <p className='text-gray-600 italic'>Rabat</p>
        </div>
        <h3 className='mt-5 text-xl font-medium'>Skills</h3>
        <div className='flex flex-wrap items-center gap-3 mt-4'>
          <p className='text-lg py-1 px-3 rounded-full text-black bg-gray-200'>HTML</p>
          <p className='text-lg py-1 px-3 rounded-full text-black bg-gray-200'>CSS</p>
          <p className='text-lg py-1 px-3 rounded-full text-black bg-gray-200'>JavaScript</p>
          <p className='text-lg py-1 px-3 rounded-full text-black bg-gray-200'>TailwindCSS</p>
          <p className='text-lg py-1 px-3 rounded-full text-black bg-gray-200'>Reactjs</p>
          <p className='text-lg py-1 px-3 rounded-full text-black bg-gray-200'>Version Controll</p>
        </div>
        <p className='mt-6 text-xl font-medium'>Experience <span className='rounded-full py-1 px-2 bg-gray-300 text-[12px] ml-2 opacity-80'>+4years</span></p>
        <p className='mt-2'>I've worked with more than 20 companies around the word since 2021, wich gives me the experience in creating modern, nice and responsive UI websites using the latest tools as React js/Tailwind.</p>
        <p className='mt-6 text-xl font-medium'>Diplome</p>
        <ul className='list-disc list-inside ml-4 mt-2 '>
          <li>Bacalauréat - 2017</li>
          <li>Diplome ISTA - 2018 - 2020</li>
        </ul>
        <button 
          type='submit'
          className='py-2 px-3 mt-6 rounded-full bg-red-600 text-white font-semibold active:bg-red-700 hover:bg-red-700 flex items-center gap-1'
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="white"><path d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"/></svg>
          Download my CV
        </button>
      </div>
    </div>
    </>
  )
}

export default Profile