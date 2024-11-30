import React from "react";
import { Link } from "react-router-dom";
import "./DashboardPage.css";

function DashboardPage() {
  return (
    <div className="dashboard-container">
      <header className="header">
        <h1>Prime-filmes</h1>
      </header>
      <div className="content-container">
        <h2 className="big-text">Bem-vindo ao Painel de Controle</h2>
        <div className="dashboard-box">
          <div className="manage-buttons">
            <Link to="/users">
              <button className="users">Controle Usuários</button>
            </Link>
            <Link to="/peliculas">
              <button className="peliculas">Controle de peliculas</button>
            </Link>
            {/* Adicione mais Links para outros botões, conforme necessário */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
