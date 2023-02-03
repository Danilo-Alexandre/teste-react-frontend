import "./LoginForm.css";
import Logo from "../../components/Logo";
import show from "../../imagens/icon.png";

function LoginForm() {
    // PARTE DO FORMULÁRIO COM INOUTS 
  return (
    <div className="titulo-formulario">
      <Logo className="logo" />
      <form className="login-form">
        <h3 className="title-login">
          Bem Vindo ao <span className="painel-bold">painel</span>
        </h3>
        <input
          className="email"
          type="email"
          placeholder="Digite seu email"
        ></input>
        <div className="container-password">
          <input
            className="password"
            type="password"
            placeholder="Digite sua senha"
          ></input>
          <img className="show" src={show} alt="visible"></img>
        </div>

        <button className="button" type="submit">
          Acessar
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
