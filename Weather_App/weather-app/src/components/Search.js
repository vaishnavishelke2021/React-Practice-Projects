import React, { useState } from "react";
import Button from "./Button";

const Search = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="flex gap-x-1 mx-auto w-[30%] mt-12">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border-none outline-none text-[15px] bg-zinc-800/60 px-3 py-[4.8px] rounded-sm"
        type="text"
        placeholder="search city"
      />
      <Button value={"Search"} />
    </div>
  );
};

export default Search;
