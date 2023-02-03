import "./LoginImagem.css";
import img1 from "../../imagens/image.png";
import img2 from "../../imagens/image2.png";

function Imagens() {
    // IMAGENS AO LADO DO LOGIN 
  return (
    <div className="container-imagens">
      <img className="img2" src={img2} alt="background espaço"></img>
      <img className="img1" src={img1} alt="notebook"></img>
    </div>
  );
}

export default Imagens;
