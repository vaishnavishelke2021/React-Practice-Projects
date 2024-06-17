import React from "react";

function Card({data}) {
  return (
    <div>
      <div className="max-w-[320px] mt-2 bg-zinc-800 flex flex-col p-3  rounded-sm shadow-lg">
        <img
          className="w-full h-[240px] rounded-sm"
          src={data.image}
          alt=""
        />
        <h1 className="mt-4 text-rose-500 text-[1.1rem] font-semibold">$ {data.price}</h1>
        <h1 className="mt-[4px] text-2xl font-bold text-white/90">{data.place}</h1>
        <p className="mt-[4px] text-sm text-white/30 tracking-normal">{data.desc} 
          <span>
            <a href="#" className="text-blue-400">
              &nbsp; read more
            </a>
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
