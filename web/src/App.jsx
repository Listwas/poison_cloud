import "./App.css";
import MainPage from "./MainPage/MainPage";
import { useState} from "react";
import LoginPage from "./LoginPage/LoginPage";

function App() {

  const [loginPage, setLoginPage] = useState(true);

  if (loginPage) {
    return(
      <>
        <LoginPage setLoginPage={setLoginPage}/>
      </>
    )  ;
  }

  return (
    <>
      <MainPage />
    </>
  );
}

export default App;
