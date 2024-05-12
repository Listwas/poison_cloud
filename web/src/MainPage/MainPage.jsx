import "./MainPage.css";
import Logo from "./logo/Logo.jsx";
import LeftNav from "./left_nav/LeftNav.jsx";
import SearchBar from "./search_bar/SearchBar.jsx";
function MainPage() {
  return (
    <>
      <div id="left_continer">
        <Logo />
        <LeftNav />
      </div>

      <div id="main_container">
        <SearchBar />
      </div>
    </>
  );
}

export default MainPage;
