import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";
import axios from "../utils/axios";
import PersonCard from "./PersonCard";

const People = () => {
  document.title = "FilmBox | People";
  const navigate = useNavigate();
  const [person, setPerson] = useState([]);

  const getPersonData = async () => {
    try {
      const { data } = await axios.get(`/person/popular`);
      setPerson(data.results);
    } catch (e) {
      console.error(e);
    }
  };
  console.log(person);

  useEffect(() => {
    getPersonData();
    console.log(person);
  }, []);

  return (
    <div className="w-full h-screen px-14 p-8 pr-16">
      <div className="flex justify-between items-center mt-[-1rem] ">
        <div className="flex gap-x-3 items-center">
          <p
            onClick={() => navigate(-1)}
            className=" text-orange cursor-pointer text-2xl"
          >
            ◀
          </p>
          <h1 className="text-[1.4rem] font-semibold w-fit">People</h1>
        </div>
        <SearchBar />
      </div>

      <div className="flex gap-5 gap-x-8 mx-auto flex-wrap justify-center py-10 mt-3">
        {person?.map((t) => (
          <PersonCard key={t.id} t={t} title="person"/>
        ))}
      </div>
    </div>
  );
};

export default People;
