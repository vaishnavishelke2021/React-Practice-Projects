const Dropdown = ({ title, options, category, onCategoryChange }) => {
  const handleChange = (event) => {
    onCategoryChange(event.target.value);
  };

  return (
    <div className="w-[10rem] md:w-[9rem]">
      <select
        onChange={handleChange}
        name="format"
        id="format"
        defaultValue="0"
        className="min-w-[10rem] md:min-w-[9rem] rounded-md px-3 py-2 text-sm bg-[#1e1e1e] text-secondary focus:outline-none"
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
    </div>
  );
};

export default Dropdown;
