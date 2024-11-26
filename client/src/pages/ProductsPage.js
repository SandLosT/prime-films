import React, { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "../services/api";
import { Link } from "react-router-dom";

function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Busca os produtos do backend
    getProducts()
      .then((response) => {
        setProducts(response.data); // Garantir que response.data contenha os produtos
      })
      .catch((error) => {
        console.error("Erro ao buscar produtos:", error);
      });
  }, []);

  const handleDelete = (id) => {
    // Exclui o produto pelo ID
    deleteProduct(id)
      .then(() => {
        // Atualiza a lista removendo o produto excluído de forma segura
        setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
      })
      .catch((error) => {
        console.error("Erro ao excluir produto:", error);
      });
  };

  return (
    <div>
      <h1>Produtos</h1>
      <Link to="/add-product">Adicionar Produto</Link>
      <ul>
        {products.length > 0 ? (
          products.map((product) => (
            <li key={product.id}>
              {product.name} - {product.price} 
              {/* Link para editar o produto */}
              <Link to={`/edit-product/${product.id}`}>Editar</Link>
              {/* Botão para excluir o produto */}
              <button onClick={() => handleDelete(product.id)}>Excluir</button>
            </li>
          ))
        ) : (
          <p>Não há produtos disponíveis.</p>
        )}
      </ul>
    </div>
  );
}

export default ProductsPage;
