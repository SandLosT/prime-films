import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPeliculabyid, updatePelicula } from "../services/api.js"; // Ajuste para buscar pela ID
import "./EditPeliculaPage.css";

function EditPeliculaPage() {
  const { id } = useParams(); // Pega o id da URL
  const [pelicula, setPelicula] = useState({
    model_tell: "",
    model_peli: "",
    quantidade: 0,
    valor: 0,
  });
  const [error, setError] = useState(""); // Estado para armazenar a mensagem de erro
  const [loading, setLoading] = useState(true); // Estado de loading
  const navigate = useNavigate();

  // UseEffect para carregar os dados da película com base no id
  useEffect(() => {
    fetchPelicula(); // Busca a película com base no id da URL
  }, [id]);

  // Função para buscar a película pela URL (id)
  const fetchPelicula = async () => {
    try {
      const data = await getPeliculabyid(id); // Agora busca pela ID
      setPelicula(data); // Preenche os campos do formulário com os dados da película
      setLoading(false); // Define que o carregamento terminou
    } catch (error) {
      console.error("Erro ao buscar película:", error);
      setError("Erro ao carregar dados da película. Por favor, tente novamente.");
      setLoading(false);
    }
  };

  // Função para manipular a mudança nos campos do formulário
  const handleChange = (event) => {
    const { name, value } = event.target;
    setPelicula((prevPelicula) => ({
      ...prevPelicula,
      [name]: value,
    }));
  };

  // Função para enviar o formulário de edição
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await updatePelicula(pelicula); // Atualiza os dados da película
      alert("Película atualizada com sucesso!");
      navigate("/peliculas"); // Redireciona para a lista de películas
    } catch (error) {
      console.error("Erro ao atualizar película:", error);
      alert("Erro ao atualizar película.");
    }
  };

  if (loading) {
    return <div>Carregando...</div>; // Exibe uma mensagem de carregamento enquanto os dados são obtidos
  }

  return (
    <div className="edit-pelicula-container">
      <h1>Editar Película</h1>
      {error && <div className="error-message">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="model_tell">Modelo de Telefone</label>
          <input
            type="text"
            id="model_tell"
            name="model_tell"
            value={pelicula.model_tell} // Campo preenchido com os dados
            onChange={handleChange}
            readOnly // Torna o campo somente leitura
          />
        </div>

        <div className="form-group">
          <label htmlFor="model_peli">Modelo de Película</label>
          <input
            type="text"
            id="model_peli"
            name="model_peli"
            value={pelicula.model_peli} // Campo preenchido com os dados
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="quantidade">Quantidade</label>
          <input
            type="number"
            id="quantidade"
            name="quantidade"
            value={pelicula.quantidade} // Campo preenchido com os dados
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="valor">Valor</label>
          <input
            type="number"
            id="valor"
            name="valor"
            value={pelicula.valor} // Campo preenchido com os dados
            onChange={handleChange}
          />
        </div>

        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default EditPeliculaPage;
