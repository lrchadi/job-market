
function ApplyForOffres() {

  const cancel = () => {
      document.getElementById('applyBox').classList.toggle('hidden')
      document.body.classList.remove('overflow-hidden')
  }

  const applyForJob = () => {
    document.getElementById('applyBox').classList.toggle('hidden')
    document.body.classList.remove('overflow-hidden')
    document.getElementById('applyMsg').classList.toggle('hidden')

    setTimeout(() => {
    document.getElementById('applyMsg').classList.toggle('hidden')
    }, 6400)
  }

  return (
    <>
    <div className="hidden"  id="applyBox">
      <div className="fixed inset-0 w-full h-full flex justify-center items-center backdrop-brightness-50 ">
        <div className="w-[350px] p-4 bg-white rounded-lg">
          <p className="text-center">Would you like to apply for this offer?</p>
          <div className="flex items-center justify-between px-5 mt-6">
            <button className="bg-green-500 text-white py-1 px-3 rounded-md" onClick={applyForJob}>Yes, I would like!</button>
            <button className="bg-red-500 text-white py-1 px-3 rounded-md" onClick={cancel}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full h-full flex justify-center visible-section " >
      <div className="gb-popup-bounce-to-bottom hidden fixed top-2 bg-white w-[350px] rounded-xl py-2 px-4 border border-gray-400 " id="applyMsg">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#75FB4C" className="inline"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg> {' '}
        You have applied for this offer, and your folder will be handled by the companie staff, <strong>we will notif</strong> you with the latest modifications.</div>
    </div>
    </>
  );
}

export default ApplyForOffres;