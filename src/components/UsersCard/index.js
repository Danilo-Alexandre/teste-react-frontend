import "./UsersCard.css";
import foto from "../../imagens/foto.png";
import icon5 from "../../imagens/icon5.png";

function UsersCard() {
    // CARD USADO PARA DEMONSTRAR CONTEÚDO 
  return (
    <section className="container-card">
      <div className="card-image">
        <img src={foto} alt="mulher tirando foto paisagem"></img>
        <div className="card-time">
          <img src={icon5} alt="icone calendario"></img>
          <span>2min atrás</span>
        </div>
      </div>
      <div className="title-card">
        <h5>
          Lorem Ipsum is simply dummy text of the printing and typesettin...
        </h5>
        <h6>
          Lorem Ipsum is simply dummy text of the printing and typesettin...
        </h6>
      </div>
    </section>
  );
}

export default UsersCard;
