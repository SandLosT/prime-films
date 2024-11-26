import React, { useState, useEffect } from "react";
import { getProducts, updateProduct } from '../services/api';
import { useNavigate, useParams } from "react-router-dom";

function EditProductPage() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Busca os dados do produto pelo ID
    getProducts(id)
      .then((response) => {
        setName(response.data.name);
        setPrice(response.data.price);
      })
      .catch((error) => {
        console.error("Erro ao buscar produto:", error);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProduct(id, { name, price })
      .then(() => {
        navigate("/products");
      })
      .catch((error) => {
        console.error("Erro ao atualizar produto:", error);
      });
  };

  return (
    <div>
      <h1>Editar Produto</h1>
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
        <button type="submit">Atualizar</button>
      </form>
    </div>
  );
}

export default EditProductPage;
