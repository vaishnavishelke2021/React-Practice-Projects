import React, { useContext } from "react";
import { MdLightMode } from "react-icons/md";
import { AppContext } from "../AppContext";
import { MdDarkMode } from "react-icons/md";

function Theme() {
  const { isDark, setIsDark } = useContext(AppContext);

  return (
    <div className="">
      <button className="bg-primary hover:scale-110 rounded-full text-[1rem] p-[5px] transition-all cursor-pointer" 
      onClick={(prev) => setIsDark(!isDark)}>
        {isDark ? (
          <MdDarkMode className="text-light" />
        ) : (
          <MdLightMode className="text-light" />
        )}
      </button>
    </div>
  );
}

export default Theme;
