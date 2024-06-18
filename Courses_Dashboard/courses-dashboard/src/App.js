import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import CardContainer from "./Components/CardContainer";
import { apiURL } from "./Utils/constants";
import { toast } from "react-toastify";
import ShimmerCardContainer from "./Components/ShimmerCardContainer";
import { btns } from "./Utils/constants";

function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(btns[0].title);

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
      <Filter category={category} setCategory={setCategory}/>
      {loading ? <ShimmerCardContainer /> : <CardContainer courses={courses} category={category}/>}
    </div>
  );
}

export default App;
