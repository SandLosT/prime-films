import React, { useState } from "react";
import { addPelicula } from "../services/api";

function AddPeliculaPage() {
  const [pelicula, setPelicula] = useState({
    model_tell: "",
    model_peli: "",
    quantidade: "",
    valor: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPelicula((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addPelicula({
        model_tell: pelicula.model_tell,
        model_peli: pelicula.model_peli,
        quantidade: (pelicula.quantidade),
        valor: (pelicula.valor),
      });
      alert("Película adicionada com sucesso!");
      setPelicula({
        model_tell: "",
        model_peli: "",
        quantidade: "",
        valor: "",
      });
    } catch (error) {
      console.error("Erro ao adicionar película:", error);
      alert("Erro ao cadastrar película. Verifique os dados.");
    }
  };

  return (
    <div className="add-pelicula-container">
      <h1>Adicionar Película</h1>
      <form className="add-pelicula-form" onSubmit={handleSubmit}>
        <label htmlFor="model_tell">Modelo do Telefone:</label>
        <input
          type="text"
          id="model_tell"
          name="model_tell"
          value={pelicula.model_tell}
          onChange={handleChange}
          required
        />
        <label htmlFor="model_peli">Modelo da Película:</label>
        <input
          type="text"
          id="model_peli"
          name="model_peli"
          value={pelicula.model_peli}
          onChange={handleChange}
          required
        />
        <label htmlFor="quantidade">Quantidade:</label>
        <input
          type="number"
          id="quantidade"
          name="quantidade"
          value={pelicula.quantidade}
          onChange={handleChange}
          required
        />
        <label htmlFor="valor">Valor:</label>
        <input
          type="number"
          id="valor"
          name="valor"
          value={pelicula.valor}
          onChange={handleChange}
          required
        />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
}

export default AddPeliculaPage;
