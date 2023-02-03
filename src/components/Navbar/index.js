import "./Navbar.css";
import icon2 from "../../imagens/icon2.png";
import icon3 from "../../imagens/icon3.png";
import icon4 from "../../imagens/icon4.png";
import Header from "../Header";

function Navbar() {
    // NAVBAR DO LADO DO USUARIO 
  return (
    <section className="container-navbar">
      <Header />
      <ul className="navbar">
        <li>
          <img src={icon2} alt="icone-cadastro"></img>
          <span className="inicio">Início</span>
        </li>

        <li>
          <img src={icon3} alt="icone-cadastro"></img>
          <span className="contatos">Contatos</span>
        </li>

        <li>
          <img src={icon4} alt="icone-cadastro"></img>
          <span className="relatorios">Relatórios</span>
        </li>

        <li>
          <img src={icon3} alt="icone-cadastro"></img>
          <span className="contatos">Contatos</span>
        </li>

        <li>
          <img src={icon3} alt="icone-cadastro"></img>
          <span className="contatos">Contatos</span>
        </li>

        <li>
          <img src={icon3} alt="icone-cadastro"></img>
          <span className="contatos">Contatos</span>
        </li>
      </ul>
    </section>
  );
}

export default Navbar;
