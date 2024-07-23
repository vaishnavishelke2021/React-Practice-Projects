import { Link } from "react-router-dom";

function Card({ p }) {
  const title = p?.title.substring(0, 18);
  const desc = p.description.substring(0, 50);
  return (
    <Link
      to={`details/${p.id}`}
      className="w-[23%] group hover:shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] hover:scale-[1.03] hover:bg-slate-50 transition-all duration-300 cursor-pointer p-3 rounded-lg border-2 bg-primary/10"
    >
      <div className="max-w-full h-[170px] bg-white rounded-md p-4 flex justify-center items-center">
        <img
          className="w-full h-full group-hover:scale-[1.05] transition-all duration-300 cursor-pointer object-contain"
          src={p?.image}
          alt=""
        />
      </div>
      <h1 className="font-bold text-[1.1rem] mt-2 leading-6  transition-all duration-300">
        {title}...
      </h1>
      <p className="text-[13px] mt-1 leading-4 text-secondary/70 transition-all duration-300">
        {desc}...
      </p>
      <h3 className="text-primary font-extrabold text-lg mt-3">$ {p?.price}</h3>
    </Link>
  );
}

export default Card;
