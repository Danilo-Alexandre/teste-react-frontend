import "./UsersContainer.css";
import UsersCard from "../UsersCard";

function UsersContainer() {
  return (
    <section className="users-container">
      <h2 className="usuario-titulo">
        Olá <span className="usuario-bold">Usuário</span>
      </h2>
      <hr />
      <div className="all-cards">
        <UsersCard />
        <UsersCard />
        <UsersCard />
        <UsersCard />
        <UsersCard />
        <UsersCard />
      </div>
    </section>
  );
}

export default UsersContainer;
