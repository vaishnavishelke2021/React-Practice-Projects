import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import CardContainer from "./Components/CardContainer";
import { apiURL } from "./Utils/constants";
import { toast } from "react-toastify";
import ShimmerCardContainer from "./Components/ShimmerCardContainer";

function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await fetch(apiURL);
      const json = await data.json();
      console.log(json);
      setCourses(json.data);
    } catch {
      toast.error("Something went wrong");
    }
    setLoading(false);
  };

  return (
    <div>
      <Navbar />
      <Filter />
      {loading ? <ShimmerCardContainer /> : <CardContainer courses={courses} />}
    </div>
  );
}

export default App;
