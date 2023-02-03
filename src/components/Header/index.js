import "./Header.css";
import logo from "../../imagens/logo.png";

function Logo() {
    // LOGO DA EMPRESA NA NAVBAR 
  return (
    <div className="logo-header">
      <img src={logo} alt="logo"></img>
    </div>
  );
}

export default Logo;
