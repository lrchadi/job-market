import { Link } from "react-router-dom";
import { tranding } from "../components/assets";
import user from '/user.jpg'
import Navbar from "../components/Navbar";


function Search() {
  return (
    <>
      <Navbar />
    <div className="py-5 px-4 lg:fixed lg:h-[96vh] lg:w-[360px] z-0 ">
      <h1 className=" font-bold text-2xl mb-4">Search</h1>
      <div className="flex items-center gap-4">
        <Link to={"/"} className=" lg:hidden ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#1f1f1f"
          >
            <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
          </svg>
        </Link>
        <div className="w-[100%] h-10 relative">
          <input
            type="text"
            placeholder="search..."
            className="w-full h-full border-none outline-none shadow-md rounded-full px-4 bg-white"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="22px"
            fill="#1f1f1f"
            className="absolute right-4 top-2"
          >
            <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
          </svg>
        </div>
      </div>
      <div className="w-full py-4 mt-2">
        {tranding.map((trand, i) => (
          <div
            key={i}
            className="py-4 px-2 flex justify-between items-center active:bg-slate-100 rounded-lg"
          >
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="18px"
                fill="#1f1f1f"
              >
                <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
              </svg>
              {trand}
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#1f1f1f"
            >
              <path d="m136-240-56-56 296-298 160 160 208-206H640v-80h240v240h-80v-104L536-320 376-480 136-240Z" />
            </svg>
          </div>
        ))}
      </div>

      {/* SHOWING PROFILE IN JOB OFFERS WHEN THE SCREENIS LARGE  */}
      <div className=" hidden lg:block lg:absolute lg:bottom-4 lg:w-[90%] lg:bg-slate-400 py-2 px-3 rounded-lg z-0 ">
        <div className="flex justify-between px-2 items-center">
          <div className="flex items-center gap-2 ">
          <div className="w-14 h-14">
            <img src={user} alt="user" className="object-cover rounded-full " />
          </div>
          <div>
            <h1 className="text-lg text-white font-semibold">Ahmed Amin</h1>
            <p className="text-[12px] italic text-gray-100">Frontend developper</p>
          </div>
        </div>
        <div className="hover:translate-x-1 duration-150">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="22px" fill="white"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
        </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Search;
