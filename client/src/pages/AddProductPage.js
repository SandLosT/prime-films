import React, { useState } from "react";
import { addProduct } from '../services/api';
import { useNavigate } from "react-router-dom";

function AddProductPage() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct({ name, price })
      .then(() => {
        navigate("/products");
      })
      .catch((error) => {
        console.error("Erro ao adicionar produto:", error);
      });
  };

  return (
    <div>
      <h1>Adicionar Produto</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome do Produto"
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
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default AddProductPage;
