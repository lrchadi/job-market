
function Filter() {

    
  const handleCloseFilter = () => {
    document.getElementById("filter").classList.toggle("hidden");
    document.body.classList.remove('overflow-hidden');
  };
    
    
    
  return (
    <div className="hidden" id="filter">
      <div className="w-full h-screen backdrop-brightness-40 z-20 fixed top-0 flex justify-center items-center">
        <div className="border bg-white p-1 md:p-3 rounded-lg z-30 ">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">Filter</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#1f1f1f"
              id="close"
              className="cursor-pointer"
              onClick={handleCloseFilter}
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </div>
          <div className="flex justify-between items-start gap-2 md:gap-10 px-4">
            <div className="mt-4">
              <p className="font-semibold mb-2">salary</p>
              <div className="mb-3">
                <input type="checkbox" id="2500" />
                <label htmlFor="2500">{">2500"}</label>
              </div>
              <div className="mb-3">
                <input type="checkbox" id="betwen" />
                <label htmlFor="betwen">{"3500 - 4500"}</label>
              </div>
              <div className="mb-3">
                <input type="checkbox" id="betwen2" />
                <label htmlFor="betwen2">{"5500 - 7000"}</label>
              </div>
              <div className="mb-3">
                <input type="checkbox" id="betwen3" />
                <label htmlFor="betwen3">{"7500 - 9500"}</label>
              </div>
              <div className="mb-3">
                <input type="checkbox" id="betwen4" />
                <label htmlFor="betwen4">{"10000 - 12000"}</label>
              </div>
              <div className="mb-3">
                <input type="checkbox" id=">15000" />
                <label htmlFor=">15000">{"<15000"}</label>
              </div>
            </div>
            <div className="mt-4">
              <p className="font-semibold mb-2">Work Arrangements</p>
              <div className="mb-3">
                <input type="checkbox" id="remote" />
                <label htmlFor="remote">Remote</label>
              </div>
              <div className="mb-3">
                <input type="checkbox" id="Mid-Level" />
                <label htmlFor="Mid-Level">On-site</label>
              </div>
              <div className="mb-3">
                <input type="checkbox" id="hybrid" />
                <label htmlFor="hybrid">Hybrid</label>
              </div>
              <div className="mb-3">
                <input type="checkbox" id="freelance" />
                <label htmlFor="freelance">Freelance</label>
              </div>
              <div className="mb-3">
                <input type="checkbox" id="contract" />
                <label htmlFor="contract">Contract</label>
              </div>
              <div className="mb-3">
                <input type="checkbox" id="part-time" />
                <label htmlFor="part-time">Part-time</label>
              </div>
              <div className="mb-3">
                <input type="checkbox" id="full-time" />
                <label htmlFor="full-time">Full-time</label>
              </div>
            </div>
            <div className="mt-4">
              <p className="font-semibold mb-2">Experience</p>
              <div className="mb-3">
                <input type="checkbox" id="Entry-Level" />
                <label htmlFor="Entry-Level">Entry-Level</label>
              </div>
              <div className="mb-3">
                <input type="checkbox" id="Mid-Level" />
                <label htmlFor="Mid-Level">Mid-level</label>
              </div>
              <div className="mb-3">
                <input type="checkbox" id="Junio" />
                <label htmlFor="Junio">Junio</label>
              </div>
              <div className="mb-3">
                <input type="checkbox" id="Sinior" />
                <label htmlFor="Sinior">Sinior</label>
              </div>
              <div className="mb-3">
                <input type="checkbox" id="Expert" />
                <label htmlFor="Expert">Expert</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
