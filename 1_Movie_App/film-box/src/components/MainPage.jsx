import Header from "./Header";
import HorizontalCards from "./HorizontalCards";
import SearchBar from "./SearchBar";

const MainPage = () => {
  return (
    <div className="w-[82%] p-2 overflow-hidden overflow-y-auto">
      <SearchBar />
      <Header />
      <HorizontalCards />
    </div>
  );
};

export default MainPage;
