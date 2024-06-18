import React from "react";

function Card() {
  return (
    <div>
      <div className="max-w-[250px] bg-zinc-800 rounded-[4px]">
        <img
          className="w-full h-[150px] rounded-t-[4px]"
          src="https://foundr.com/wp-content/uploads/2021/09/Best-online-course-platforms.png"
          alt=""
        />
        <div className="px-3 py-2 pb-4">
          <h1 className="text-yellow-600 font-bold text-[1rem]">
            Web Development
          </h1>
          <p className="text-[13px] text-lemon/90 mt-2 tracking-[0.6px] leading-4 font-normal">
            This course dolor sit amet and consectetur adipisicing elit. exemd
            Exewmcl sapiente. Obcaeca.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
