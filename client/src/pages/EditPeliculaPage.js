import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPeliculas, updatePelicula } from "../services/api"; // Importando as funções corretas

function EditPeliculaPage() {
  const [name, setName] = useState(""); // Estado para o nome da película
  const [price, setPrice] = useState(""); // Estado para o preço da película (ou outro atributo que você tenha)
  const { id } = useParams(); // Para pegar o ID da película na URL
  const navigate = useNavigate(); // Para redirecionar após a edição

  useEffect(() => {
    // Busca os dados da película pelo ID
    getPeliculas(id)
      .then((response) => {
        setName(response.data.name); // Ajuste conforme a estrutura da sua API
        setPrice(response.data.price); // Ajuste conforme a estrutura da sua API
      })
      .catch((error) => {
        console.error("Erro ao buscar película:", error);
      });
  }, [id]); // Dependência do ID para buscar novamente ao mudar

  const handleSubmit = (e) => {
    e.preventDefault();
    // Chama a função de atualização passando os novos dados
    updatePelicula(id, { name, price })
      .then(() => {
        // Redireciona de volta para a lista de películas após a atualização
        navigate("/peliculas");
      })
      .catch((error) => {
        console.error("Erro ao atualizar película:", error);
      });
  };

  return (
    <div>
      <h1>Editar Película</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome da Película"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Preço"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <button type="submit">Atualizar</button>
      </form>
    </div>
  );
}

export default EditPeliculaPage;
