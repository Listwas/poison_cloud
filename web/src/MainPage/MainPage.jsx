import "./MainPage.css";
import Logo from "./logo/Logo.jsx";
import LeftNav from "./left_nav/LeftNav.jsx";
import SearchBar from "./search_bar/SearchBar.jsx";
import ListedFiles from "./listed_files/ListedFiles.jsx";
import UserList from "./user_list/UserList.jsx";
function MainPage() {
  return (
    <>
      <div id="left_continer">
        <Logo />
        <LeftNav />
      </div>

      <div id="main_container">
        <SearchBar />
        <ListedFiles />
      </div>

      <div id="right_container">
        <UserList />
      </div>
    </>
  );
}

export default MainPage;
