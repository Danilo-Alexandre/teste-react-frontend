import "./LoginContainer.css";
import LoginForm from "../../components/LoginForm";
import LoginImagem from "../../components/LoginImagem";

function LoginContainer() {
    // FORMULARIO DE LOGIN 
  return (
    <section className="body-login">
      <div className="container-login">
        <LoginForm className="component-loginForm" />
     {/* IMAGEM AO LADO DO LOGIN   */}
        <LoginImagem />
      </div>
    </section>
  );
}

export default LoginContainer;
