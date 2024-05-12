import "./MainPage.css";
import Logo from "./logo/Logo.jsx";
import Left_nav from "./left_nav/Left_nav";
function MainPage() {
  return (
    <>
      <div id="main_container">
        <Logo />,
        <Left_nav />
      </div>
    </>
  );
}

export default MainPage;
