import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addUsuario } from "../services/api.js";
import "./AddUserPage.css";

function AddUserPage() {
  const [nome, setName] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setPassword] = useState("");
  const navigate = useNavigate();

  const handleAddUser = async (e) => {
    e.preventDefault();
    const usuario = { nome, email, senha };
    await addUsuario(usuario);
    alert("Usuário adicionado com sucesso!");
    navigate("/users");
  };

  return (
    <div className="add-user-container">
      <h1>Adicionar Usuário</h1>
      <form onSubmit={handleAddUser}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default AddUserPage;
