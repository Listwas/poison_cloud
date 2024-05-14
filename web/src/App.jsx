import "./App.css";
import MainPage from "./MainPage/MainPage";
import { useState } from "react";
import LoginPage from "./LoginPage/LoginPage";
import { useCookies } from "react-cookie";

function App() {
  const [cookie, setCookie] = useCookies(["sessionKey"]);
  const [loginPage, setLoginPage] = useState(true);

  if (loginPage && !("sessionKey" in cookie)) {
    return (
      <>
        <LoginPage setLoginPage={setLoginPage} />
      </>
    );
  }

  return (
    <>
      <MainPage />
    </>
  );
}

export default App;
