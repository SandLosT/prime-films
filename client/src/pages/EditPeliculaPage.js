import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPeliculas, updatePelicula } from "../services/api.js"; // Ajuste para buscar pela ID
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
  const navigate = useNavigate();

  // UseEffect para carregar os dados da película com base no id
  useEffect(() => {
    fetchPelicula(); // Busca a película com base no id da URL
  }, []); // O array de dependências vazio garante que o efeito seja executado uma vez, ao montar o componente
  
  const fetchPelicula = async () => {
    const peliculas = await getPeliculas(); // Carrega todas as películas
    const pelicula = peliculas.find((p) => p.id === parseInt(id)); // Encontra a película com base no id
  
    if (pelicula) {
      setPelicula(pelicula); // Preenche os campos do formulário com os dados da película
    } else {
      setError("Erro ao carregar dados da película. Por favor, tente novamente.");
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
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Crie um objeto de película com todos os dados que precisam ser atualizados
    const updatedPelicula = {
      model_tell: pelicula.model_tell,  // Acessando as propriedades de 'pelicula'
      model_peli: pelicula.model_peli,
      quantidade: pelicula.quantidade,
      valor: pelicula.valor
    };
  
    // Envie os dados atualizados para o método updatePelicula
    await updatePelicula(id, updatedPelicula);
  
    // Exiba uma mensagem de sucesso e navegue para a página de películas
    alert("Película atualizada com sucesso!");
    navigate("/peliculas");
  };
  

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
