import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getPeliculas, deletePelicula, getPeliculaByTell } from "../services/api";
import "./PeliculasPage.css";

function PeliculasPage() {
  const [peliculas, setPeliculas] = useState([]);
  const [searchTell, setSearchTell] = useState(""); // Estado para controlar o input de busca

  useEffect(() => {
    fetchPeliculas();
  }, []);

  const fetchPeliculas = async () => {
    const data = await getPeliculas();
    setPeliculas(data);
  };

  const handleSearchChange = (event) => {
    setSearchTell(event.target.value);
  };

  const handleSearch = async () => {
    if (searchTell) {
      try {
        const data = await getPeliculaByTell(searchTell); // Função de busca por tell
        setPeliculas([data]); // Atualiza a lista com a película filtrada
      } catch (error) {
        console.error("Erro ao buscar película:", error);
      }
    } else {
      fetchPeliculas(); // Se a busca estiver vazia, busca todas as películas
    }
  };

  const handleDelete = async (tell) => {
    if (window.confirm("Deseja realmente excluir esta película?")) {
      await deletePelicula(tell);
      alert("Película excluída com sucesso!");
      fetchPeliculas();
    }
  };

  return (
    <div className="peliculas-container">
      <h1>Lista de Películas</h1>

      {/* Campo de busca */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar por telefone"
          value={searchTell}
          onChange={handleSearchChange}
        />
        <button onClick={handleSearch}>Buscar</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Modelo de Telefone</th>
            <th>Tipo de Película</th>
            <th>Quantidade</th>
            <th>Valor</th>
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
                <button onClick={() => handleDelete(pelicula.model_tell)}>
                  Excluir
                </button>
                <Link to={`/edit-pelicula/${pelicula.id}`}>
                  <button>Editar</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/add-pelicula">
        <button>Adicionar Película</button>
      </Link>
    </div>
  );
}

export default PeliculasPage;
