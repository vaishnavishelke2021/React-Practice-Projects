import Footer from "./Footer";
import Header from "./Header";
import HorizontalCards from "./HorizontalCards";
import SearchBar from "./SearchBar";

const MainPage = () => {
  return (
    <div className="w-full p-2 overflow-auto overflow-x-hidden">
      <SearchBar />
      <Header />
      <HorizontalCards />
      <Footer />
    </div>
  );
};

export default MainPage;
