import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function Pagination() {
  const { page, totalPages, handlePageChange, isDark } = useContext(AppContext);

  return (
    <div className="w-[100%] mx-auto py-[9px] px-[18rem] flex justify-between items-center fixed bottom-0 bg-primary">
      <div className="space-x-4">
        {page > 1 && (
          <button
            className={`${isDark ? 'bg-dark text-light' : 'bg-light text-dark'} py-1 px-[3px] rounded-sm mt-1`}
            onClick={() => handlePageChange(page - 1)}
          >
            <IoIosArrowBack />
          </button>
        )}

        {page < totalPages && (
          <button
            className={`${isDark ? 'bg-dark text-light' : 'bg-light text-dark'} py-1 px-[3px] rounded-sm`}
            onClick={() => handlePageChange(page + 1)}
          >
            <IoIosArrowForward />
          </button>
        )}
      </div>
      <p className="text-[15px] font-normal text-light">
        Page <span className="font-bold">{page}</span> of {totalPages}
      </p>
    </div>
  );
}

export default Pagination;
