import { Link } from "react-router-dom";

const VCard = ({ t }) => {
  console.log(t);
  return (
    <Link
      to={`/${t.media_type}/details/${t.id}}`}
      className="relative w-[23.5%] bg-[#1e1e1e] p-2 rounded-[4px] mb-2 hover:scale-[1.07] transition-all duration-200 ease-in-out cursor-pointer hover:shadow-xl"
    >
      <img
        className="w-full h-[200px] object-cover rounded-[2px]"
        src={`https://image.tmdb.org/t/p/original/${
          t.backdrop_path || t.poster_path
        }`}
        alt=""
      />

      <h1 className="text-[1.2rem] font-bold mt-2">
        {t.name || t.title || t.original_name || t.original_title}
      </h1>
      <p className="text-[14px] text-secondary/40 mt-2">
        {t.overview.slice(0, 30)} <span className="text-zinc-600">more...</span>
      </p>

      <div className="absolute top-3 right-3 shadow-lg bg-orange text-[13.5px] text-secondary text-extrabold p-2 flex justify-center items-center rounded-full w-[35px] h-[35px]">
        {(t.vote_average * 10).toFixed()} <span className="text-[10px]">%</span>
      </div>
    </Link>
  );
};

export default VCard;
