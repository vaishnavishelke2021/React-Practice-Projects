const Dropdown = ({ title, options }) => {
  return (
    <div className=" w-[9rem]">
      <select
        name="format"
        id="format"
        defaultValue="0"
        className="w-[13rem] rounded-md px-3 py-2 text-sm bg-[#1e1e1e] text-secondary focus:outline-none"
      >
        <option value="0" disabled>
          {title}
        </option>

        {options.map((o, i) => (
          <option key={i} value={o}>
            {o.toUpperCase()}
          </option>
        ))}
      </select>
      {/* <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
        <svg
          className="w-4 h-4 text-gray-300"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 010 1.414l6 6a1 1 0 01-1.414 1.414L4 10.414v6a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l6-6a1 1 0 011.414-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div> */}
    </div>
  );
};

export default Dropdown;
