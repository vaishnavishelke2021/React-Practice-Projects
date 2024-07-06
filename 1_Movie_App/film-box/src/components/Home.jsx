import Navbar from "./Navbar";

const Home = () => {
  document.title = "FilmBox | Home";
  return (
    <div className="w-full h-screen flex">
      <Navbar />
    </div>
  );
};

export default Home;
