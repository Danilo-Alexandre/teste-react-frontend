import "./Logo.css";
import logo from "../../imagens/logo.png";

function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="logo"></img>
    </div>
  );
}

export default Logo;
