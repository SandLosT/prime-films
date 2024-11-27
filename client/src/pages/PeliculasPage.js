import React, { useEffect, useState } from "react";
import { getPeliculas, deletePelicula } from "../services/api";
import { Link } from "react-router-dom";
import "./PeliculasPage.css"; // Importa o arquivo CSS para a estilização

function PeliculasPage() {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    // Busca as películas do backend
    getPeliculas()
      .then((data) => {
        setPeliculas(data);
      })
      .catch((error) => {
        console.error("Erro ao buscar películas:", error);
      });
  }, []);

  const handleDelete = (tell) => {
    deletePelicula(tell)
      .then(() => {
        setPeliculas((prevPeliculas) =>
          prevPeliculas.filter((pelicula) => pelicula.modeloTelefone !== tell)
        );
      })
      .catch((error) => {
        console.error("Erro ao excluir película:", error);
      });
  };

  return (
    <div className="peliculas-container">
      <h1 className="peliculas-title">Lista de Películas</h1>
      <Link to="/add-pelicula" className="add-pelicula-button">
        Adicionar Película
      </Link>
      <div className="peliculas-table">
        {peliculas.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Modelo do Telefone</th>
                <th>Modelo da Película</th>
                <th>Quantidade</th>
                <th>Valor (R$)</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {peliculas.map((pelicula) => (
                <tr key={pelicula.model_tell}>
                  <td>{pelicula.model_tell}</td>
                  <td>{pelicula.model_peli}</td>
                  <td>{pelicula.quantidade}</td>
                  <td>{pelicula.valor}</td>
                  <td>
                    <button
                      className="delete-button"
                      onClick={() => handleDelete(pelicula.model_tell)}
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="no-data">Não há películas disponíveis.</p>
        )}
      </div>
    </div>
  );
}

export default PeliculasPage;
