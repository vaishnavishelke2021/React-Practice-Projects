import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function Pagination() {
  const { page, totalPages, handlePageChange } = useContext(AppContext);

  return (
    <div className="w-[90%] mx-auto py-5 flex justify-between items-center">
      <div className="space-x-4">
        {page > 1 && (
          <button
            className="bg-lightBlue text-dark py-1 px-[3px] rounded-sm"
            onClick={() => handlePageChange(page - 1)}
          >
            <IoIosArrowBack />
          </button>
        )}

        {page < totalPages && (
          <button
            className="bg-lightBlue text-dark py-1 px-[3px] rounded-sm"
            onClick={() => handlePageChange(page + 1)}
          >
            <IoIosArrowForward />
          </button>
        )}
      </div>
      <p className="text-[15px] font-normal">
        Page <span className="font-bold">{page}</span> of {totalPages}
      </p>
    </div>
  );
}

export default Pagination;
