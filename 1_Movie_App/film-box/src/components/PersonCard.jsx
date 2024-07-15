import { Link } from "react-router-dom";

const PersonCard = ({ t, title }) => {
  console.log(t);
  return (
    <Link
      to={`/person/details/${t.id}`}
      className="w-[14%] bg-[#1e1e1e] p-2 rounded-[4px] mb-2 hover:scale-[1.07] transition-all duration-200 ease-in-out cursor-pointer hover:shadow-xl"
    >
      <img
        className="w-full h-[230px] object-cover rounded-[2px]"
        src={`https://image.tmdb.org/t/p/original/${
          t.backdrop_path || t.poster_path || t.profile_path
        }`}
        alt=""
      />

      <h1 className="text-[1.1rem] font-bold mt-2">
        {t.name || t.title || t.original_name || t.original_title}
      </h1>
      <p className="text-[13px] mt-1 text-secondary/70">{`Popularity : ${t.popularity}`}</p>
    </Link>
  );
};

export default PersonCard;
