import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import CardContainer from "./Components/CardContainer";
import { apiURL } from "./Utils/constants";
import { toast } from "react-toastify";

function App() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(apiURL);
      const json = await data.json();
      console.log(json);
      setCourses(json.data);
    } catch {
      toast.error("Something went wrong");
    }
  };

  return (
    <div>
      <Navbar />
      <Filter />
      <CardContainer courses={courses} />
    </div>
  );
}

export default App;
