import { Link } from "react-router-dom";
import noimg from "../../public/no-image.png";

const Card = ({ t }) => {
  return (
    <Link
      to={`/${t.media_type}/details/${t.id}}`}
      className="min-w-[190px] max-w-[210px] bg-[#1e1e1e] p-2 rounded-[4px] mb-2"
    >
      <img
        className="w-full h-[140px] object-cover rounded-[2px]"
        src={
          t.backdrop_path || t.poster_path
            ? `https://image.tmdb.org/t/p/original/${
                t.backdrop_path || t.poster_path
              }`
            : noimg
        }
        alt=""
      />

      <h1 className="text-[1rem]  font-semibold mt-2">
        {t.name || t.title || t.original_name || t.original_title}
      </h1>
      <p className="text-[12px] text-secondary/50  mt-2">
        {t.overview.slice(0, 80)} <span className="text-zinc-600">more...</span>
      </p>
    </Link>
  );
};

export default Card;
