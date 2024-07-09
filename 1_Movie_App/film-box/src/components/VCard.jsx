const VCard = ({ t }) => {
  return (
    <div className="w-[18.3%] bg-[#1e1e1e] p-2 rounded-[4px] mb-2 hover:scale-[1.1] transition-all duration-200 ease-in-out cursor-pointer hover:shadow-xl">
      <img
        className="w-full h-[240px] object-cover rounded-[2px]"
        src={`https://image.tmdb.org/t/p/original/${
          t.backdrop_path || t.poster_path
        }`}
        alt=""
      />

      <h1 className="text-[1.2rem] font-extrabold mt-2">
        {t.name || t.title || t.original_name || t.original_title}
      </h1>
      <p className="text-[14px] text-secondary/60 mt-2">
        {t.overview.slice(0, 40)} <span className="text-zinc-600">more...</span>
      </p>
    </div>
  );
};

export default VCard;
