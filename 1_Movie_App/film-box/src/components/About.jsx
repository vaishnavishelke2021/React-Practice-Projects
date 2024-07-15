import { FaFilm, FaTv, FaStar, FaUsers } from "react-icons/fa";
import logo from "../../public/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import Footer from "./Footer";

const About = () => {
  document.title = "FilmBox | About";
  const navigate = useNavigate();
  return (
    <div className="bg-primary text-secondary min-h-screen">
      <div className="max-w-[88%] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* ------------------------------back btn------------------------------- */}
        <Link
          onClick={() => navigate(-1)}
          className=" text-white cursor-pointer text-2xl  hover:text-orange transition-all duration-200 w-fit"
        >
          <IoMdArrowBack />
        </Link>

        <h1 className="text-2xl sm:text-4xl font-semibold text-center mt-4 sm:mt-0 mb-6 flex gap-x-5 items-center justify-center">
          <span>About</span>
          <span className="font-bold text-orange inline-flex  gap-x-2 items-center">
            <img
              className="h-7 w-7 sm:h-9 sm:w-9 mt-[-3px]"
              src={logo}
              alt=""
            />{" "}
            FilmBox
          </span>
        </h1>

        <div className="mb-12">
          <p className="text-lg text-[15px] text-secondary/90 text-medium text-center max-w-[58rem] mx-auto">
            FilmBox is your ultimate destination for exploring the world of
            cinema and television. We provide a comprehensive platform for movie
            and TV show enthusiasts to discover, track, and enjoy their favorite
            content.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col bg-[#1e1e1e] rounded-lg shadow-md p-6">
            <FaFilm className="text-3xl mb-4 text-orange" />
            <h2 className="text-xl font-bold mb-2">Extensive Movie Database</h2>
            <p className="text-secondary/50">
              Access information on thousands of movies, from classics to the
              latest releases.
            </p>
          </div>

          <div className="flex flex-col bg-[#1e1e1e] rounded-lg shadow-md p-6">
            <FaTv className="text-3xl mb-4 text-orange" />
            <h2 className="text-xl font-bold mb-2">TV Show Tracker</h2>
            <p className="text-secondary/50">
              Keep up with your favorite TV shows, track episodes, and discover
              new series.
            </p>
          </div>

          <div className="flex flex-col bg-[#1e1e1e] rounded-lg shadow-md p-6">
            <FaStar className="text-3xl mb-4 text-orange" />
            <h2 className="text-xl font-bold mb-2">Ratings & Reviews</h2>
            <p className="text-secondary/50">
              Read and contribute to user ratings and reviews for movies and TV
              shows.
            </p>
          </div>

          <div className="flex flex-col bg-[#1e1e1e] rounded-lg shadow-md p-6">
            <FaUsers className="text-3xl mb-4 text-orange" />
            <h2 className="text-xl font-bold mb-2">Community</h2>
            <p className="text-secondary/50">
              Join a community of film enthusiasts, share recommendations, and
              discuss your favorite content.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-center mb-4">
            Our Mission
          </h2>
          <p className="text-center text-[15px] text-secondary/70 max-w-3xl mx-auto">
            At FilmBox, our mission is to connect people through the power of
            storytelling in film and television. We strive to create a platform
            that not only informs but also inspires a deeper appreciation for
            the art of cinema and TV.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
