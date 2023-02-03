import "./UsersScene.css";
import Navbar from "../../components/Navbar";
import UsersContainer from "../../components/UsersContainer";

function UsersScene() {
    // PÁGINA DO USUÁRIO 
  return (
    <section className="users-scene">
      <Navbar />
      <UsersContainer />
    </section>
  );
}

export default UsersScene;
