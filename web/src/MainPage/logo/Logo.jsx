import styles from "./Logo.module.css";
import logo from "/logo.png";
function Logo() {
  return (
    <figure>
      <img src={logo} alt="logo_image"></img>
    </figure>
  );
}
export default Logo;
