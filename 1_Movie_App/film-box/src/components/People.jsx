import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";
import axios from "../utils/axios";
import PersonCard from "./PersonCard";
import Footer from "./Footer";
import Loading from "./Loading";

const People = () => {
  document.title = "FilmBox | People";
  const navigate = useNavigate();
  const [person, setPerson] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPersonData = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`/person/popular`);
      setPerson(data.results);
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };
  console.log(person);

  useEffect(() => {
    getPersonData();
    console.log(person);
  }, []);

  return !loading ? (
    <div className="w-full h-screen px-3 sm:px-14 py-8">
      <div className="w-full flex flex-wrap items-center mt-[-1rem] ">
        <div className="flex gap-x-3 items-center">
          <p
            onClick={() => navigate(-1)}
            className=" text-orange cursor-pointer text-[1.3rem] sm:text-2xl"
          >
            ◀
          </p>
          <h1 className="text-[1.2rem] sm:text-[1.4rem] font-semibold w-fit">
            People
          </h1>
        </div>
        <SearchBar />
      </div>

      <div className="flex gap-y-5 gap-x-5 sm:gap-x-2 flex-wrap justify-center sm:justify-between py-10 mt-3">
        {person?.map((t) => (
          <PersonCard key={t.id} t={t} title="person" />
        ))}
      </div>
      <Footer />
    </div>
  ) : (
    <Loading />
  );
};

export default People;
