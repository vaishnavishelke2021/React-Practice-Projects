import React, { useState } from "react";

function Card({ data }) {
  const [readMore, setReadMore] = useState(false);

  const completeDesc = readMore ? data.desc : data.desc.substring(0, 110);

  const readmoreHandler = () => {
    setReadMore(!readMore);
  };

  return (
    <div>
      <div className="max-w-[320px] mt-2 bg-zinc-800 flex flex-col p-3  rounded-sm shadow-lg">
        <img className="w-full h-[240px] rounded-sm" src={data.image} alt="" />
        <h1 className="mt-4 text-rose-500 text-[1.1rem] font-semibold">
          $ {data.price}
        </h1>
        <h1 className="mt-[4px] text-[1.4rem] font-bold text-white/80">
          {data.place}
        </h1>
        <p className="mt-[4px] text-sm text-white/30 tracking-normal">
          {completeDesc}
          <span
            onClick={readmoreHandler}
            className="text-blue-400 cursor-pointer"
          >
            {readMore ? " ...show less" : " ...read more"}
          </span>{" "}
        </p>

        <button className="boder-none bg-rose-500 hover:bg-rose-900 text-white/90 mt-5 p-1 font-medium text-[15px] rounded-sm">
          Not Interested
        </button>
      </div>
    </div>
  );
}

export default Card;
