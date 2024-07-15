import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";

const Contact = () => {
  document.title = "FilmBox | Contact";

  const navigate = useNavigate();
  return (
    <div>
      <div className=" max-w-[88%] mx-auto flex flex-col items-center justify-center min-h-screen bg-primary text-secondary p-6 py-12">
        {/* ------------------------------back btn------------------------------- */}
        <div className="flex w-full justify-start">
          <Link
            onClick={() => navigate(-1)}
            className=" text-white text-start cursor-pointer text-2xl  hover:text-orange transition-all duration-200 w-fit"
          >
            <IoMdArrowBack />
          </Link>
        </div>
        <div>
          <h1 className="text-3xl font-semibold mb-4 text-center mt-4">
            Contact Us
          </h1>
          <p className="text-lg max-w-[58rem] mx-auto font-normal text-secondary/70 mb-8 text-center">
            Have any questions or feedback? We’d love to hear from you! Reach
            out to us using the form below or through our social media channels.
          </p>
        </div>
        <div className="w-full max-w-[38rem] bg-[#1e1e1e] rounded-lg shadow-lg p-10 mt-4">
          <form className="grid grid-cols-1 gap-5">
            <div>
              <label
                className="block text-gray-300 font-medium mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-primary rounded-lg bg-primary text-secondary focus:outline-none focus:ring-2 focus:ring-orange"
                required
              />
            </div>
            <div>
              <label
                className="block text-gray-300 font-medium mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-primary rounded-lg bg-primary text-secondary focus:outline-none focus:ring-2 focus:ring-orange"
                required
              />
            </div>
            <div>
              <label
                className="block text-gray-300 font-medium mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-4 py-2 border border-primary rounded-lg bg-primary text-secondary focus:outline-none focus:ring-2 focus:ring-orange"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-orange text-secondary font-bold py-2 px-4 rounded-lg hover:bg-white hover:text-primary transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="mt-8 mb-4 text-center">
          <p className="text-secondary/60 font-normal">
            <strong className="font-medium text-secondary">Address:</strong> 123
            Movie Lane, Film City, CA 12345
          </p>
          <p className="text-secondary/60">
            <strong className="font-medium text-secondary">Phone:</strong> (123)
            456-7890
          </p>
          <div className="flex justify-center mt-5">
            <a
              href="https://facebook.com"
              className="text-orange hover:text-secondary transition-all duration-200 mx-2"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="w-4 sm:w-5 h-4 sm:h-5" />
            </a>
            <a
              href="https://twitter.com"
              className="text-orange hover:text-secondary transition-all duration-200 mx-2"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="w-4 sm:w-5 h-4 sm:h-5" />
            </a>
            <a
              href="https://instagram.com"
              className="text-orange hover:text-secondary transition-all duration-200 mx-2"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="w-4 sm:w-5 h-4 sm:h-5" />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
