import React from "react";
import { Link } from "react-router-dom";
import "./DashboardPage.css";

function DashboardPage() {
  return (
    <>
      <div className="dashboard-container">
        {/* Cabeçalho */}
        <header className="header">
          <h1>Controle de Estoque</h1>
        </header>

        {/* Conteúdo Principal */}
        <div className="main-content">
          <p>Escolha uma das opções abaixo para começar:</p>
          <div className="manage-buttons">
            <Link to="/products">
              <button>Gerenciar Produtos</button>
            </Link>
            <Link to="/users">
              <button className="users">Gerenciar Usuários</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Rodapé - Fora do Container Principal */}
      <footer className="footer">
        <p>&copy; 2024 Controle de Estoque. Todos os direitos reservados.</p>
      </footer>
    </>
  );
}

export default DashboardPage;
