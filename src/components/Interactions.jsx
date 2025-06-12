import { useState } from "react";

function Interactions({ offer }) {
  const [interaction, setInteraction] = useState({
    like: offer.interactions[0].like,
    share: offer.interactions[1].shares,
    hires: offer.interactions[2].hires,
  });

  const [hasClickedLike, setHasClickedLike] = useState(false);
  const [hasClickedShare, setHasClickedShare] = useState(false);
  const [hasClickedHire, setHasClickedHire] = useState(false);

  const handelLikes = () => {
    setInteraction(
      hasClickedLike
        ? (prev) => ({ ...prev, like: prev.like - 1 })
        : (prev) => ({ ...prev, like: prev.like + 1 })
    );
    setHasClickedLike((prev) => !prev);
  };

  const handelShares = () => {
    setInteraction(
      hasClickedShare
        ? (prev) => ({ ...prev, share: prev.share - 1 })
        : (prev) => ({ ...prev, share: prev.share + 1 })
    );
    setHasClickedShare((prev) => !prev);
  };

  const handelHires = () => {
    document.getElementById("applyBox").classList.toggle("hidden");
    document.body.classList.add("overflow-hidden");

    setInteraction(
      hasClickedHire
        ? (prev) => ({ ...prev, hires: prev.hires - 1 })
        : (prev) => ({ ...prev, hires: prev.hires + 1 })
    );
    setHasClickedHire((prev) => !prev);
  };

  return (
    <>
      <div className="flex items-center gap-1 cursor-pointer" onClick={handelLikes}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#1f1f1f"
        >
          <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
        </svg>
        <p className={`font-semibold`}>
          {interaction.like > 9999
            ? interaction.like.toString().slice(0, 2) + "k"
            : interaction.like > 999
            ? interaction.like.toString().at(0) + "k"
            : interaction.like}
        </p>
      </div>
      <div className="flex items-center gap-1 cursor-pointer" onClick={handelShares}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#1f1f1f"
        >
          <path d="M680-80q-50 0-85-35t-35-85q0-6 3-28L282-392q-16 15-37 23.5t-45 8.5q-50 0-85-35t-35-85q0-50 35-85t85-35q24 0 45 8.5t37 23.5l281-164q-2-7-2.5-13.5T560-760q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-24 0-45-8.5T598-672L317-508q2 7 2.5 13.5t.5 14.5q0 8-.5 14.5T317-452l281 164q16-15 37-23.5t45-8.5q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T720-200q0-17-11.5-28.5T680-240q-17 0-28.5 11.5T640-200q0 17 11.5 28.5T680-160ZM200-440q17 0 28.5-11.5T240-480q0-17-11.5-28.5T200-520q-17 0-28.5 11.5T160-480q0 17 11.5 28.5T200-440Zm480-280q17 0 28.5-11.5T720-760q0-17-11.5-28.5T680-800q-17 0-28.5 11.5T640-760q0 17 11.5 28.5T680-720Zm0 520ZM200-480Zm480-280Z" />
        </svg>
        <p className="font-semibold">
          {interaction.share > 9999
            ? interaction.share.toString().slice(0, 2) + "k"
            : interaction.share > 999
            ? interaction.share.toString().at(0) + "k"
            : interaction.share}
        </p>
      </div>
      <div className="flex items-center gap-1 cursor-pointer " onClick={handelHires}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#1f1f1f"
        >
          <path d="M440-280h80v-168l64 64 56-56-160-160-160 160 56 56 64-64v168ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640v400q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H447l-80-80H160v480Zm0 0v-480 480Z" />
        </svg>
        <p className="font-semibold">
          {interaction.hires > 9999
            ? interaction.hires.toString().slice(0, 2) + "k"
            : interaction.hires > 999
            ? interaction.hires.toString().at(0) + "k"
            : interaction.hires}
        </p>
      </div>
    </>
  );
}

export default Interactions;
